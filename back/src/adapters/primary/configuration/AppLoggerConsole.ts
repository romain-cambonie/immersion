import { AppLogger, LogLevel } from "../../../ports/AppLogger";
/* eslint-disable no-console */
export class AppLoggerConsole implements AppLogger {
  log<T = object>(level: LogLevel, message: string, data?: T): void {
    switch (level) {
      case "fatal":
        return console.error(message, data);

      case "info":
        return console.info(message, data);

      case "error":
        return console.error(message, data);

      case "debug":
        return console.debug(message, data);

      case "trace":
        return console.trace(message, data);

      case "warn":
        return console.warn(message, data);
    }
  }
}

const consoleLogger: AppLoggerConsole = new AppLoggerConsole();

// Example use: const logger = createFilenameLogger(__filename);
// back/src/ports/AppLogger.ts => AppLogger.ts
export const createConsoleLogger = (): AppLogger => consoleLogger;
