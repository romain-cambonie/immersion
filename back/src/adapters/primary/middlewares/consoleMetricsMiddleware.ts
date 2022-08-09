import { Middleware, Request, Response } from "../../../ports/Server";

export const consoleMetricsMiddleware: Middleware = (
  _req: Request,
  _res: Response,
  next?: () => void,
) => {
  // eslint-disable-next-line no-console
  console.log("__metrics", {
    fake: "I like turtles",
  });
  if (next) next();
};
