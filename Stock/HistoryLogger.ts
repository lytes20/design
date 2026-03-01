import Stock from "./Stock";

export default class HistoryLogger {
  log(stock: Stock): void {
    console.log(`HistoryLogger log stock : ${stock.toString()}`);
  }
}
