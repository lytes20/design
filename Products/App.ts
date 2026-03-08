import BubbleSort from './BubbleSort';
import Product from './Product';
import ProductCollection from './ProductCollection';
import SortStrategy from './SortStrategy';

class App {
  static main() {
    const productCollection: ProductCollection = new ProductCollection();
    productCollection.addProduct(new Product('123', 'iPhone 10'));
    productCollection.addProduct(new Product('1234', 'iPhone 30'));

    const reverseIterator: Iterator<Product> = productCollection.reverseIterator();

    let result = reverseIterator.next();
    while (!result.done) {
      console.log(result.value);
      result = reverseIterator.next();
    }

    // Without strategy pattern
    // productCollection.sortWithBubbleSort();
    // productCollection.sortWithInsertionSort();

    // With a strategy pattern, we set the strategy
    const bubbleSort: SortStrategy = new BubbleSort(productCollection);
    productCollection.setSortStrategy(bubbleSort);
    productCollection.sort();
  }
}

App.main();
