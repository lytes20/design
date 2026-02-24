import BubbleSort from "./BubbleSort";
import Product from "./Product";
import ProductCollection from "./ProductCollection";
import SortStrategy from "./SortStrategy";

class App {
  static main() {
    const productCollection: ProductCollection = new ProductCollection();
    productCollection.addProduct(new Product("123", "iPhone 10"));
    productCollection.addProduct(new Product("1234", "iPhone 30"));

    // Without strategy pattern
    // productCollection.sortWithBubbleSort();
    // productCollection.sortWithInsertionSort();

    const bubbleSort: SortStrategy = new BubbleSort(productCollection);
    productCollection.setSortStrategy(bubbleSort);
    productCollection.sort();
  }
}

App.main();
