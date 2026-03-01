import Stock from "./Stock";

export default class Trader {
  trade(stock: Stock): void {
    console.log(`Trader trade stock: ${stock.toString()}`);
  }
}
