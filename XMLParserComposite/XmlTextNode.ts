import { XmlComponent } from "./XmlComponent";

/**
 * Leaf — holds raw text content. Has no tag, no attributes, no children.
 *
 * This is a terminal node; all recursive operations stop here.
 */
export class XmlTextNode extends XmlComponent {
  private static readonly EMPTY_ATTRS: ReadonlyMap<string, string> = new Map();

  constructor(private readonly text: string) {
    super();
  }

  getTagName(): string {
    return "#text";
  }

  getAttribute(_name: string): undefined {
    return undefined;
  }

  getAttributes(): ReadonlyMap<string, string> {
    return XmlTextNode.EMPTY_ATTRS;
  }

  getText(): string {
    return this.text;
  }

  getChildren(): readonly XmlComponent[] {
    return [];
  }

  isSelfClosing(): boolean {
    return false;
  }

  render(_indent = 0): string {
    return this.text;
  }

  find(_tagName: string): null {
    return null;
  }

  findAll(_tagName: string): XmlComponent[] {
    return [];
  }
}
