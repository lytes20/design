import Logger from "./Logger";
import LogMessage from "./LogMessage";

export default class FileLogger extends Logger {
  protected openLogRepository(): void {
    console.log("Opening file");
  }
  protected writeLogMessage(message: string): void {
    console.log("Writing log");
  }
  protected closeLogRepository(): void {
    console.log("Closing file");
  }
}
