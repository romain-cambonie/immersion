import { Middleware, Request, Response } from "../../../ports/Server";

export const consoleHttpLoggerMiddleware: Middleware = (
  _req: Request,
  _res: Response,
  next?: () => void,
) => {
  // eslint-disable-next-line no-console
  console.log("I will not log the raw request and response... are you crazy ?");
  if (next) next();
};
