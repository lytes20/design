export default class Product {
  private productNumber: string;
  private name: string;
  private price: number;
  private available: boolean;

  constructor(productNumber: string, name: string) {
    this.productNumber = productNumber;
    this.name = name;
  }
}
