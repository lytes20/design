import ProductCollection from "./ProductCollection";
import SortStrategy from "./SortStrategy";

export default class BubbleSort extends SortStrategy {
  constructor(productCollection: ProductCollection) {
    super(productCollection);
  }
  sort(): void {
    console.log("Sorting using bubble sort");
  }
}
