export default class Stock {
  private stockName: string;
  private value: number;

  constructor(stockName: string, value: number) {
    this.stockName = stockName;
    this.value = value;
  }

  public getStockName(): string {
    return this.stockName;
  }

  public setStockName(stockName: string): void {
    this.stockName = stockName;
  }

  public getValue(): number {
    return this.value;
  }

  public setValue(value: number): void {
    this.value = value;
  }

  public toString(): string {
    return "Stock [stockName=" + this.stockName + ", value=" + this.value + "]";
  }
}
