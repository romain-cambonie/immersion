//TODO This adapter has NOT been tested yet and cannot be trusted.
import pino, { Logger as PinoLogger } from "pino";
import { AppLogger, LogLevel } from "../../../ports/AppLogger";

export class AppLoggerPino implements AppLogger {
  public constructor(public readonly rootLogger: PinoLogger = pinoPrettyRootLogger) {}

  log<T = object>(level: LogLevel, message: string, data: T): void {
    switch (level) {
      case "fatal":
        return this.rootLogger.fatal(data, message);

      case "info":
        return this.rootLogger.info(data, message);

      case "error":
        return this.rootLogger.error(data, message);

      case "debug":
        return this.rootLogger.debug(data, message);

      case "trace":
        return this.rootLogger.trace(data, message);

      case "warn":
        return this.rootLogger.warn(data, message);

      default:
        return;
    }
  }
}

//TODO Use pino-loki transport https://hackmd.io/lVX5-W1SQy2cU9mwHDEywQ
// to interface directly with loki as pino-pretty usage is not tailored to mass logging.

const getLogLevel = () => {
  // Allow command-line overrides of the log level.
  if (process.env.LOG_LEVEL) return process.env.LOG_LEVEL;
  // Avoid distracting log output during test execution.
  if (process.env.NODE_ENV === "test") return "fatal";
  // Default to level "info"
  return "info";
};

const pinoPrettyConfiguration = {
  level: getLogLevel(),
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
      singleLine: !process.env.LOGGER_MULTI_LINE,
      translateTime: "yyyy-mm-dd HH:MM:ss.l Z",
      ignore: "pid,hostname",
    },
  },
}

const pinoPrettyRootLogger: PinoLogger = pino(pinoPrettyConfiguration);

export const appLoggerPino: AppLoggerPino = new AppLoggerPino(pinoPrettyRootLogger);

// Example use: const logger = createFilenameLogger(__filename);
// back/src/ports/AppLogger.ts => AppLogger.ts
export const createPinoLogger = (identifier: string): AppLoggerPino => {
  appLoggerPino.rootLogger.child({ name: identifier });
  return appLoggerPino;
};
