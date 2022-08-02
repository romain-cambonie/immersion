import express, { Express } from "express";
import {
  ApplicationConfiguration,
  isProductionApplicationConfiguration,
} from "../../../ports/ApplicationConfiguration";
import { Server } from "../../../ports/Server";
import { rootRouterMaker } from "../routers/rootRouter";
import { testRouterMaker } from "../routers/testRouter";
import {
  appLoggerMaker,
  httpLoggerMiddlewareMaker,
  metricMiddlewareByEnvironment,
  requestBodyToJsonMiddleware,
} from "./server.express.config";

// TODO We should test that in e2e fashion

export const createServerFromApplicationConfiguration = (
  configuration: ApplicationConfiguration,
): Server => {
  const application: Express = express();

  // Application-wide Middlewares
  application.use(httpLoggerMiddlewareMaker(configuration));

  application.use(metricMiddlewareByEnvironment[configuration.environment]);

  application.use(requestBodyToJsonMiddleware);

  // Registering routes
  application.use(rootRouterMaker());
  application.use(testRouterMaker());

  return {
    application,
    configuration,
    logger: appLoggerMaker(configuration),
  };
};

export const startServerInProductionModeMaker = (server: Server) => () => {
  if (!isProductionApplicationConfiguration(server.configuration))
    return server.logger.log(
      "error",
      `Trying to start a production server without the port env variable !`,
    );

  const port = server.configuration.port;

  server.application.listen(port, () => {
    server.logger.log(
      "info",
      `server started with env: ${server.configuration.environment} at http://localhost:${port}`,
    );
  });
};
