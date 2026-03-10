class XmlNode {
  tagName: string;
  attributes: { [key: string]: string };
  children: XmlNode[];
  textContent: string;

  constructor(tagName: string) {
    this.tagName = tagName;
    this.attributes = {};
    this.children = [];
    this.textContent = "";
  }
}

class XMLParser {
  private xml: string;
  private pos: number;

  constructor(xml: string) {
    this.xml = xml.trim();
    this.pos = 0;
  }

  parse(): XmlNode {
    this.skipWhitespace();

    // skip xml declaration <?xml ... ?>
    if (this.xml.startsWith("<?", this.pos)) {
      while (this.pos < this.xml.length && this.xml[this.pos] !== ">") {
        this.pos++;
      }
      this.pos++; // skip >
    }

    this.skipWhitespace();
    return this.parseNode();
  }

  private parseNode(): XmlNode {
    // expect <
    if (this.xml[this.pos] !== "<") {
      throw new Error("Expected '<' at position " + this.pos);
    }
    this.pos++; // skip <

    const tagName = this.readTagName();
    const node = new XmlNode(tagName);

    // parse attributes
    this.skipWhitespace();
    while (this.pos < this.xml.length && this.xml[this.pos] !== ">" && !(this.xml[this.pos] === "/" && this.xml[this.pos + 1] === ">")) {
      const attrName = this.readTagName();
      this.skipWhitespace();

      if (this.xml[this.pos] !== "=") {
        throw new Error("Expected '=' after attribute name at position " + this.pos);
      }
      this.pos++; // skip =

      const quote = this.xml[this.pos];
      if (quote !== '"' && quote !== "'") {
        throw new Error("Expected quote for attribute value at position " + this.pos);
      }
      this.pos++; // skip opening quote

      let attrValue = "";
      while (this.pos < this.xml.length && this.xml[this.pos] !== quote) {
        attrValue += this.xml[this.pos];
        this.pos++;
      }
      this.pos++; // skip closing quote

      node.attributes[attrName] = attrValue;
      this.skipWhitespace();
    }

    // self-closing tag like <br />
    if (this.xml[this.pos] === "/" && this.xml[this.pos + 1] === ">") {
      this.pos += 2;
      return node;
    }

    this.pos++; // skip >

    // parse children and text content
    while (this.pos < this.xml.length) {
      this.skipWhitespace();

      if (this.xml[this.pos] === "<") {
        // closing tag
        if (this.xml[this.pos + 1] === "/") {
          this.pos += 2; // skip </
          const closingTag = this.readTagName();
          if (closingTag !== tagName) {
            throw new Error("Mismatched tag: expected </" + tagName + "> but got </" + closingTag + ">");
          }
          this.pos++; // skip >
          break;
        }

        // child node
        const child = this.parseNode();
        node.children.push(child);
      } else {
        // text content
        let text = "";
        while (this.pos < this.xml.length && this.xml[this.pos] !== "<") {
          text += this.xml[this.pos];
          this.pos++;
        }
        node.textContent += text.trim();
      }
    }

    return node;
  }

  private readTagName(): string {
    let name = "";
    while (
      this.pos < this.xml.length &&
      this.xml[this.pos] !== " " &&
      this.xml[this.pos] !== ">" &&
      this.xml[this.pos] !== "/" &&
      this.xml[this.pos] !== "=" &&
      this.xml[this.pos] !== "\n" &&
      this.xml[this.pos] !== "\r" &&
      this.xml[this.pos] !== "\t"
    ) {
      name += this.xml[this.pos];
      this.pos++;
    }
    return name;
  }

  private skipWhitespace() {
    while (
      this.pos < this.xml.length &&
      (this.xml[this.pos] === " " ||
        this.xml[this.pos] === "\n" ||
        this.xml[this.pos] === "\r" ||
        this.xml[this.pos] === "\t")
    ) {
      this.pos++;
    }
  }
}

export { XmlNode, XMLParser };
