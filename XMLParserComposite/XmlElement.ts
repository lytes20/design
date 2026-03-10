import { XmlComponent } from "./XmlComponent";

/**
 * Composite — an XML element that owns a collection of child XmlComponents.
 *
 * Every operation (render, find, findAll, getText) is implemented by iterating
 * over children and delegating. The element itself never needs to know whether
 * a child is a leaf or another composite — that is the essence of the pattern.
 */
export class XmlElement extends XmlComponent {
  private readonly attributes: Map<string, string> = new Map();
  private readonly children: XmlComponent[] = [];
  private selfClosing = false;

  constructor(private readonly tagName: string) {
    super();
  }

  setAttribute(name: string, value: string): void {
    this.attributes.set(name, value);
  }

  addChild(child: XmlComponent): void {
    this.children.push(child);
  }

  markSelfClosing(): void {
    this.selfClosing = true;
  }

  // ── XmlComponent interface ────────────────────────────────────────────────

  getTagName(): string {
    return this.tagName;
  }

  getAttribute(name: string): string | undefined {
    return this.attributes.get(name);
  }

  getAttributes(): ReadonlyMap<string, string> {
    return this.attributes;
  }

  /**
   * Aggregate text by delegating getText() to every child.
   * The Composite recursively collects; leaves return their raw text directly.
   */
  getText(): string {
    return this.children.map((c) => c.getText()).join("");
  }

  getChildren(): readonly XmlComponent[] {
    return this.children;
  }

  isSelfClosing(): boolean {
    return this.selfClosing;
  }

  render(indent = 0): string {
    const pad = "  ".repeat(indent);
    const attrStr = [...this.attributes.entries()]
      .map(([k, v]) => `${k}="${v}"`)
      .join(" ");
    const openTag = attrStr
      ? `${pad}<${this.tagName} ${attrStr}`
      : `${pad}<${this.tagName}`;

    if (this.selfClosing) {
      return `${openTag} />`;
    }

    // Inline rendering when the only child is a single text node
    const isSingleTextChild =
      this.children.length === 1 && this.children[0].getTagName() === "#text";

    if (isSingleTextChild) {
      return `${openTag}>${this.children[0].getText()}</${this.tagName}>`;
    }

    // Delegate render() to every child — they sort out their own indentation
    const body = this.children.map((c) => c.render(indent + 1)).join("\n");
    return `${openTag}>\n${body}\n${pad}</${this.tagName}>`;
  }

  find(tagName: string): XmlComponent | null {
    for (const child of this.children) {
      if (child.getTagName() === tagName) return child;
      const found = child.find(tagName);
      if (found !== null) return found;
    }
    return null;
  }

  findAll(tagName: string): XmlComponent[] {
    const results: XmlComponent[] = [];
    for (const child of this.children) {
      if (child.getTagName() === tagName) results.push(child);
      results.push(...child.findAll(tagName));
    }
    return results;
  }
}
