import LogMessage from "./LogMessage";

class DatabaseLogger {
  log(message: LogMessage) {}
  serializeMessage(message: LogMessage) {}
  connectToDatabase() {}
  insertLogMessageToTable(message: string) {}
  closeDbConnection() {}
}
