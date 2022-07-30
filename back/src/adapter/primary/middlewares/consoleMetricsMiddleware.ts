import { Middleware, Request, Response } from "../../../ports/Server";

export const consoleMetricsMiddleware: Middleware = (req: Request, res: Response, next?: () => void) => {
  console.log("__metrics", {
    fake: "I like turtles"
  });
  if(next) next();
}