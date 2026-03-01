import HistoryLogger from "./HistoryLogger";
import StockNotifier from "./StockNotifier";
import StockService from "./StockService";
import Trader from "./Trader";

class App {
  static main(): void {
    const stockService: StockService = new StockService();
    const historyLogger: HistoryLogger = new HistoryLogger();
    const stockNotifier: StockNotifier = new StockNotifier();
    const trader: Trader = new Trader();

    stockService.setHistoryLogger(historyLogger);
    stockService.setStockNotifier(stockNotifier);
    stockService.setTrader(trader);

    stockService.changeStockValue("AMZN", 2310.8);
    stockService.changeStockValue("MSFT", 890.45);
  }
}

App.main();
