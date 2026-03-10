/**
 * Component — the uniform interface for every node in the XML tree.
 *
 * Both leaf nodes (XmlTextNode) and composite nodes (XmlElement, XmlDocument)
 * implement this contract. Client code never needs to distinguish between them:
 * it calls render(), find(), or findAll() on any XmlComponent and the call
 * propagates correctly through the tree.
 */
export abstract class XmlComponent {
  abstract getTagName(): string;
  abstract getAttribute(name: string): string | undefined;
  abstract getAttributes(): ReadonlyMap<string, string>;
  abstract getText(): string;
  abstract getChildren(): readonly XmlComponent[];
  abstract isSelfClosing(): boolean;

  /** Recursively render this subtree back to a formatted XML string. */
  abstract render(indent?: number): string;

  /** Depth-first search — returns the first descendant matching tagName. */
  abstract find(tagName: string): XmlComponent | null;

  /** Depth-first search — returns all descendants matching tagName. */
  abstract findAll(tagName: string): XmlComponent[];
}
