export enum LogLevel {
  WARNING,
  INFO,
  ERROR,
}
export default class LogMessage {
  message: string;
  details: string;
  level: LogLevel;

  constructor(message: string, details: string, level: LogLevel) {
    (this.message = message), (this.details = details), (this.level = level);
  }
}
