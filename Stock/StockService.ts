export default class StockService {
  changeStockValue(stockName: string, value: number) {}
}

class Stock {
  stockName: string;
  value: number;
}

class Trader {
  trade(stock: Stock) {}
}

class StockNotifier {
  handleStockChange(stock: Stock) {}
}

class HistoryLogger {
  log(stock: Stock) {}
}
