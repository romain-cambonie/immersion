export type LogLevel = "fatal" | "error" | "warn" | "info" | "debug" | "trace";

export interface AppLogger {
  log: <T extends object>(level: LogLevel, message: string, data?: T) => void
}