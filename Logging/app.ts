import FileLogger from "./FileLogger";
import LogMessage, { LogLevel } from "./LogMessage";

class Application {
  static main() {
    const fileLogger = new FileLogger();
    const message = new LogMessage(
      "Can not send message",
      "smtp server smtp.acme.com can not be reached",
      LogLevel.ERROR
    );
    fileLogger.log(message);
  }
}

Application.main();
