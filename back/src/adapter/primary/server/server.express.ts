import express, { Express } from "express";
import { ApplicationConfiguration } from "../../../ports/ApplicationConfiguration";
import { Server } from "../../../ports/Server";
import { testRouterMaker } from "../routers/testRouter";
import {
  appLoggerMaker,
  httpLoggerMiddlewareMaker,
  metricsMiddlewareMaker,
  requestBodyToJsonMiddleware,
} from "./server.express.config";

// TODO We should test that in e2e fashion

export const createServerFromApplicationConfiguration = (
  configuration: ApplicationConfiguration,
): Server => {
  const application: Express = express();

  // Application-wide Middlewares
  application.use(httpLoggerMiddlewareMaker(configuration));
  application.use(metricsMiddlewareMaker(configuration));
  application.use(requestBodyToJsonMiddleware);

  application.get(
    "/",
    (_req: express.Request, res: express.Response): express.Response =>
      res.send("Hello World !"),
  );

  // Registering routes
  application.use(testRouterMaker());

  return {
    application,
    configuration,
    logger: appLoggerMaker(configuration),
  };
};
