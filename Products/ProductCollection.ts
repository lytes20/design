import Product from "./Product";
import SortStrategy from "./SortStrategy";

export default class ProductCollection {
  private products: Product[] = [];
  private sortStrategy: SortStrategy;

  addProduct(product: Product): void {
    this.products.push(product);
  }
  removeProduct(productNumber: string): boolean {
    return false;
  }

  // If no strategy pattern, we would have had all three sorting strategies in this class
  // Adding a new sort strategy would mean changing this class
  //   sortWithBubbleSort() {}
  //   sortWithInsertionSort() {}
  //   sortWithQuickSort() {}

  sort(): void {
    this.sortStrategy.sort();
  }

  setSortStrategy(sortStrategy: SortStrategy): void {
    this.sortStrategy = sortStrategy;
  }
}
