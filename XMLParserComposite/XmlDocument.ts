import { XmlComponent } from "./XmlComponent";

/**
 * Composite — the root of the XML document tree.
 *
 * Wraps the XML declaration and the single root XmlElement. Delegates all
 * tree operations to that root child, keeping the interface identical to any
 * other XmlComponent. Client code can call find/findAll/render on the document
 * or on any subtree with no behavioral difference.
 */
export class XmlDocument extends XmlComponent {
  private static readonly EMPTY_ATTRS: ReadonlyMap<string, string> = new Map();
  private declaration = "";
  private root: XmlComponent | null = null;

  setDeclaration(declaration: string): void {
    this.declaration = declaration;
  }

  setRoot(root: XmlComponent): void {
    this.root = root;
  }

  getRoot(): XmlComponent | null {
    return this.root;
  }

  // ── XmlComponent interface ────────────────────────────────────────────────

  getTagName(): string {
    return "#document";
  }

  getAttribute(_name: string): undefined {
    return undefined;
  }

  getAttributes(): ReadonlyMap<string, string> {
    return XmlDocument.EMPTY_ATTRS;
  }

  getText(): string {
    return this.root?.getText() ?? "";
  }

  getChildren(): readonly XmlComponent[] {
    return this.root ? [this.root] : [];
  }

  isSelfClosing(): boolean {
    return false;
  }

  render(_indent = 0): string {
    const decl = this.declaration ? `${this.declaration}\n` : "";
    return decl + (this.root ? this.root.render(0) : "");
  }

  find(tagName: string): XmlComponent | null {
    if (!this.root) return null;
    if (this.root.getTagName() === tagName) return this.root;
    return this.root.find(tagName);
  }

  findAll(tagName: string): XmlComponent[] {
    if (!this.root) return [];
    const results: XmlComponent[] = [];
    if (this.root.getTagName() === tagName) results.push(this.root);
    results.push(...this.root.findAll(tagName));
    return results;
  }
}
