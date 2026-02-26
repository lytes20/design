import LogMessage from "./LogMessage";

export default abstract class Logger {
  protected log(message: LogMessage): void {
    const serialisedMessage = this.serializeMessage(message);
    this.openLogRepository();
    this.writeLogMessage(serialisedMessage);
    this.closeLogRepository();
  }

  protected abstract openLogRepository(): void;
  protected abstract writeLogMessage(message: string): void;
  protected abstract closeLogRepository(): void;
  protected serializeMessage(message: LogMessage): string {
    return message.toString();
  }
}
