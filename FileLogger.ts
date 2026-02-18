import LogMessage from "./LogMessage";

export default class FileLogger {
  log(message: LogMessage) {
    const serialisedMessage = this.serializeMessage(message);
    this.openFile();
    this.writeLogMessage(serialisedMessage);
    this.closFile();
  }
  serializeMessage(message: LogMessage): string {
    return message.toString();
  }
  openFile() {
    console.log("Opening file");
  }
  writeLogMessage(message: string) {
    console.log("Writing to file");
  }
  closFile() {
    console.log("Closing file");
  }
}
