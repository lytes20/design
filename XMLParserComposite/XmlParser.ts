import { Token, Tokenizer, TokenType } from "./Tokenizer";
import { XmlComponent } from "./XmlComponent";
import { XmlDocument } from "./XmlDocument";
import { XmlElement } from "./XmlElement";
import { XmlTextNode } from "./XmlTextNode";

/**
 * Phase 2: consume a token stream and build the composite XmlDocument tree.
 *
 * This is an LL(1) recursive-descent parser. It knows nothing about character
 * positions — all of that complexity was handled by the Tokenizer. Each call to
 * parseElement() produces a fully constructed XmlComponent subtree.
 */
export class XmlParser {
  private readonly tokens: readonly Token[];
  private pos = 0;

  private constructor(tokens: readonly Token[]) {
    this.tokens = tokens;
  }

  /** Entry point — tokenize then parse in one call. */
  static parse(xml: string): XmlDocument {
    const tokens = new Tokenizer(xml).tokenize();
    return new XmlParser(tokens).parseDocument();
  }

  // ── Grammar rules ─────────────────────────────────────────────────────────

  private parseDocument(): XmlDocument {
    const doc = new XmlDocument();

    if (this.peek().type === TokenType.DECLARATION) {
      doc.setDeclaration(this.consume().value);
    }

    doc.setRoot(this.parseElement());
    return doc;
  }

  private parseElement(): XmlElement {
    const openToken = this.consume(TokenType.OPEN_TAG_START);
    const element = new XmlElement(openToken.value);

    // Collect all attributes that follow immediately
    while (this.peek().type === TokenType.ATTRIBUTE) {
      const attr = this.consume();
      element.setAttribute(attr.attrName!, attr.attrValue!);
    }

    // Self-closing: no children, return immediately
    if (this.peek().type === TokenType.SELF_CLOSING_END) {
      this.consume();
      element.markSelfClosing();
      return element;
    }

    this.consume(TokenType.TAG_END);

    // Parse child nodes until we reach the matching close tag
    while (
      this.peek().type !== TokenType.CLOSE_TAG &&
      this.peek().type !== TokenType.EOF
    ) {
      const child = this.parseChild();
      if (child !== null) element.addChild(child);
    }

    const closeToken = this.consume(TokenType.CLOSE_TAG);
    if (closeToken.value !== element.getTagName()) {
      throw new SyntaxError(
        `Mismatched tag: expected </${element.getTagName()}> but found </${closeToken.value}>`
      );
    }

    return element;
  }

  private parseChild(): XmlComponent | null {
    const next = this.peek();

    if (next.type === TokenType.TEXT) {
      return new XmlTextNode(this.consume().value);
    }

    if (next.type === TokenType.OPEN_TAG_START) {
      return this.parseElement();
    }

    return null;
  }

  // ── Token stream helpers ──────────────────────────────────────────────────

  private peek(): Token {
    return this.tokens[this.pos];
  }

  private consume(expected?: TokenType): Token {
    const token = this.tokens[this.pos++];
    if (expected !== undefined && token.type !== expected) {
      throw new SyntaxError(
        `Expected ${TokenType[expected]} but got ${TokenType[token.type]} ("${token.value}")`
      );
    }
    return token;
  }
}
