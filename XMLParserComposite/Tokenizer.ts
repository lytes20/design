export enum TokenType {
  DECLARATION,
  OPEN_TAG_START,
  ATTRIBUTE,
  TAG_END,
  SELF_CLOSING_END,
  CLOSE_TAG,
  TEXT,
  EOF,
}

export interface Token {
  type: TokenType;
  value: string;
  attrName?: string;
  attrValue?: string;
}

/**
 * Phase 1: break a raw XML string into a flat token stream.
 *
 * The parser can then focus purely on grammar and tree construction without
 * any character-level concerns.
 */
export class Tokenizer {
  private readonly input: string;
  private pos = 0;
  private readonly tokens: Token[] = [];

  constructor(input: string) {
    this.input = input.trim();
  }

  tokenize(): readonly Token[] {
    while (this.pos < this.input.length) {
      if (this.startsWith("<?")) {
        this.readDeclaration();
      } else if (this.startsWith("</")) {
        this.readCloseTag();
      } else if (this.startsWith("<")) {
        this.readOpenTagWithAttributes();
      } else {
        this.readText();
      }
    }

    this.tokens.push({ type: TokenType.EOF, value: "" });
    return this.tokens;
  }

  // ── Private readers ───────────────────────────────────────────────────────

  private readDeclaration(): void {
    const start = this.pos;
    while (this.pos < this.input.length && !this.startsWith("?>")) {
      this.pos++;
    }
    this.pos += 2; // skip ?>
    this.tokens.push({
      type: TokenType.DECLARATION,
      value: this.input.slice(start, this.pos),
    });
    this.skipWhitespace();
  }

  private readCloseTag(): void {
    this.pos += 2; // skip </
    const name = this.readName();
    this.skipWhitespace();
    this.pos++; // skip >
    this.tokens.push({ type: TokenType.CLOSE_TAG, value: name });
  }

  /**
   * Reads `<tagName attr="val" …>` or `<tagName />` and emits:
   *   OPEN_TAG_START  (tag name)
   *   ATTRIBUTE*      (zero or more)
   *   TAG_END | SELF_CLOSING_END
   */
  private readOpenTagWithAttributes(): void {
    this.pos++; // skip <
    const name = this.readName();
    this.tokens.push({ type: TokenType.OPEN_TAG_START, value: name });

    this.skipWhitespace();

    while (
      this.pos < this.input.length &&
      !this.startsWith(">") &&
      !this.startsWith("/>")
    ) {
      const attrName = this.readName();
      this.skipWhitespace();

      if (this.input[this.pos] !== "=") {
        throw new SyntaxError(
          `Expected '=' after attribute "${attrName}" at position ${this.pos}`
        );
      }
      this.pos++; // skip =

      const attrValue = this.readQuotedValue();
      this.tokens.push({
        type: TokenType.ATTRIBUTE,
        value: `${attrName}="${attrValue}"`,
        attrName,
        attrValue,
      });

      this.skipWhitespace();
    }

    if (this.startsWith("/>")) {
      this.pos += 2;
      this.tokens.push({ type: TokenType.SELF_CLOSING_END, value: "/>" });
    } else {
      this.pos++; // skip >
      this.tokens.push({ type: TokenType.TAG_END, value: ">" });
    }
  }

  private readText(): void {
    let text = "";
    while (this.pos < this.input.length && this.input[this.pos] !== "<") {
      text += this.input[this.pos++];
    }
    const trimmed = text.trim();
    if (trimmed) {
      this.tokens.push({ type: TokenType.TEXT, value: trimmed });
    }
  }

  // ── Helpers ───────────────────────────────────────────────────────────────

  private readName(): string {
    let name = "";
    while (
      this.pos < this.input.length &&
      !/[\s>=\/]/.test(this.input[this.pos])
    ) {
      name += this.input[this.pos++];
    }
    return name;
  }

  private readQuotedValue(): string {
    const quote = this.input[this.pos];
    if (quote !== '"' && quote !== "'") {
      throw new SyntaxError(
        `Expected opening quote for attribute value at position ${this.pos}`
      );
    }
    this.pos++; // skip opening quote
    let value = "";
    while (this.pos < this.input.length && this.input[this.pos] !== quote) {
      value += this.input[this.pos++];
    }
    this.pos++; // skip closing quote
    return value;
  }

  private skipWhitespace(): void {
    while (this.pos < this.input.length && /\s/.test(this.input[this.pos])) {
      this.pos++;
    }
  }

  private startsWith(str: string): boolean {
    return this.input.startsWith(str, this.pos);
  }
}
