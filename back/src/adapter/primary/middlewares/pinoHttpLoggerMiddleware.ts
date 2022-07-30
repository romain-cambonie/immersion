import { pinoHttp } from "pino-http";
import { Middleware } from "../../../ports/Server";
import { appLoggerPino } from "../configuration/AppLoggerPino";

// TODO Will log all httpRequests | We can add here some logger config as needed
export const pinoHttpLoggerMiddleware: Middleware = pinoHttp({ logger: appLoggerPino.rootLogger.child({ name: "PinoHttpLogger" }) });
