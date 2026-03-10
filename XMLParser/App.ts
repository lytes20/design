import { XMLParser, XmlNode } from "./XMLParser";

function printNode(node: XmlNode, indent: number) {
  const pad = " ".repeat(indent);

  let attrStr = "";
  const attrKeys = Object.keys(node.attributes);
  if (attrKeys.length > 0) {
    attrStr = " [" + attrKeys.map((k) => k + '="' + node.attributes[k] + '"').join(", ") + "]";
  }

  console.log(pad + "<" + node.tagName + ">" + attrStr);

  if (node.textContent) {
    console.log(pad + "  text: " + node.textContent);
  }

  for (let i = 0; i < node.children.length; i++) {
    printNode(node.children[i], indent + 2);
  }
}

class App {
  static main() {
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

    console.log("Parsing XML...\n");

    const parser = new XMLParser(xml);
    const root = parser.parse();

    console.log("=== Parsed Tree ===");
    printNode(root, 0);

    console.log("\n=== Accessing data directly ===");
    const books = root.children.filter((c) => c.tagName === "book");
    console.log("Number of books:", books.length);

    for (let i = 0; i < books.length; i++) {
      const book = books[i];
      const title = book.children.find((c) => c.tagName === "title");
      const author = book.children.find((c) => c.tagName === "author");
      const price = book.children.find((c) => c.tagName === "price");

      console.log("\nBook " + (i + 1) + ":");
      console.log("  id     :", book.attributes["id"]);
      console.log("  genre  :", book.attributes["genre"]);
      console.log("  title  :", title ? title.textContent : "N/A");
      console.log("  author :", author ? author.textContent : "N/A");
      console.log("  price  :", price ? price.textContent : "N/A");
    }

    console.log("\n=== Metadata ===");
    const metadata = root.children.find((c) => c.tagName === "metadata");
    if (metadata) {
      metadata.children.forEach((child) => {
        if (child.tagName === "thumbnail") {
          console.log("  thumbnail: (self-closing, no content)");
        } else {
          console.log("  " + child.tagName + ": " + child.textContent);
        }
      });
    }
  }
}

App.main();
