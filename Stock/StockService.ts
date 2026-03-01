import HistoryLogger from "./HistoryLogger";
import Stock from "./Stock";
import StockNotifier from "./StockNotifier";
import Trader from "./Trader";

export default class StockService {
  historyLogger: HistoryLogger;
  stockNotifier: StockNotifier;
  trader: Trader;

  changeStockValue(stockName: string, value: number) {
    const stock = new Stock(stockName, value);
    this.historyLogger.log(stock);
    this.stockNotifier.handleStockChange(stock);
    this.trader.trade(stock);
  }

  setHistoryLogger(historyLogger: HistoryLogger): void {
    this.historyLogger = historyLogger;
  }

  setStockNotifier(stockNotifier: StockNotifier): void {
    this.stockNotifier = stockNotifier;
  }

  setTrader(trader: Trader): void {
    this.trader = trader;
  }
}
