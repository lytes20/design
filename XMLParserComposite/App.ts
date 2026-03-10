import { XmlComponent } from "./XmlComponent";
import { XmlParser } from "./XmlParser";

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<catalog>
  <book id="bk101" genre="fiction">
    <author>John Doe</author>
    <title>XML Adventures</title>
    <price>12.99</price>
  </book>
  <book id="bk102" genre="non-fiction">
    <author>Jane Smith</author>
    <title>Learning TypeScript</title>
    <price>29.99</price>
  </book>
  <metadata>
    <total>2</total>
    <currency>USD</currency>
    <thumbnail />
  </metadata>
</catalog>`;

/**
 * Walks any XmlComponent subtree — uniform whether the root is a document,
 * an element, or a text node. This function does not check types; it relies
 * entirely on the XmlComponent interface.
 */
function printTree(node: XmlComponent, indent = 0): void {
  const pad = "  ".repeat(indent);
  const tag = node.getTagName();

  if (tag === "#text") {
    console.log(`${pad}"${node.getText()}"`);
    return;
  }

  if (tag === "#document") {
    console.log(`${pad}[document]`);
    node.getChildren().forEach((c) => printTree(c, indent + 1));
    return;
  }

  const attrs = [...node.getAttributes().entries()]
    .map(([k, v]) => `${k}="${v}"`)
    .join(", ");

  const suffix = node.isSelfClosing() ? " />" : ">";
  console.log(`${pad}<${tag}${attrs ? " " + attrs : ""}${suffix}`);

  node.getChildren().forEach((c) => printTree(c, indent + 1));

  if (!node.isSelfClosing()) {
    console.log(`${pad}</${tag}>`);
  }
}

class App {
  static main(): void {
    // ── 1. Parse ────────────────────────────────────────────────────────────
    const doc = XmlParser.parse(xml);

    // ── 2. render() — the document reconstructs itself through delegation ───
    console.log("=== render() output ===");
    console.log(doc.render());

    // ── 3. printTree — same function works on any subtree ───────────────────
    console.log("\n=== Full tree (printTree on document) ===");
    printTree(doc);

    // The power of Composite: treat any subtree as the root
    const firstBook = doc.find("book");
    if (firstBook) {
      console.log("\n=== Same printTree called on a single <book> subtree ===");
      printTree(firstBook);
    }

    // ── 4. find() / findAll() — delegated through the composite tree ────────
    console.log("\n=== findAll('book') ===");
    const books = doc.findAll("book");
    console.log(`Found ${books.length} book(s):`);

    for (const book of books) {
      const title = book.find("title");
      const author = book.find("author");
      const price = book.find("price");

      console.log([
        `  id:     ${book.getAttribute("id")}`,
        `  genre:  ${book.getAttribute("genre")}`,
        `  title:  ${title?.getText() ?? "N/A"}`,
        `  author: ${author?.getText() ?? "N/A"}`,
        `  price:  ${price?.getText() ?? "N/A"}`,
      ].join("\n"));
      console.log();
    }

    // ── 5. getText() delegated recursively through composite children ────────
    console.log("=== getText() on <metadata> (aggregates all descendant text) ===");
    const metadata = doc.find("metadata");
    if (metadata) {
      console.log(`  raw aggregated text: "${metadata.getText()}"`);

      metadata.getChildren().forEach((child) => {
        const label = child.isSelfClosing()
          ? `<${child.getTagName()} /> (self-closing)`
          : `<${child.getTagName()}>`;
        console.log(`  ${label}: "${child.getText()}"`);
      });
    }
  }
}

App.main();
