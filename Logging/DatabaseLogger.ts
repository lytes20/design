import Logger from "./Logger";
import LogMessage from "./LogMessage";

export default class DatabaseLogger extends Logger {
  protected openLogRepository(): void {
    console.log("Opening Database");
  }
  protected writeLogMessage(message: string): void {
    console.log("Writing to  Database");
  }
  protected closeLogRepository(): void {
    console.log("Close Database connection");
  }
}
