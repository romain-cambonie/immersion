import { Middleware, Request, Response } from "../../../ports/Server";

export const consoleHttpLoggerMiddleware: Middleware = (req: Request, res: Response, next?: () => void ) => {
  console.log("I will not log the raw request and response... are you crazy ?");
  if(next) next();
}