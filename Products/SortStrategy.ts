import ProductCollection from "./ProductCollection";

export default abstract class SortStrategy {
  private productCollection: ProductCollection;
  constructor(productCollection: ProductCollection) {
    this.productCollection = productCollection;
  }
  abstract sort(): void;
}
