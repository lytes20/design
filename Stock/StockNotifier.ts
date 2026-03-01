import Stock from "./Stock";

export default class StockNotifier {
  handleStockChange(stock: Stock) {
    console.log(`StockNotifier handleStockChange stock: ${stock.toString()}`);
  }
}
