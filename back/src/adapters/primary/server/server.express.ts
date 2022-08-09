import express, { Express } from "express";
import {
  ApplicationConfiguration,
  isProductionApplicationConfiguration,
} from "../../../ports/ApplicationConfiguration";
import { Server } from "../../../ports/Server";
import { rootRouterMaker } from "../routers/rootRouter/rootRouter";
import { testRouterMaker } from "../routers/testRouter/testRouter";
import {
  appLoggerMaker,
  httpLoggerMiddlewareMaker,
  metricMiddlewareByEnvironment,
  requestBodyToJsonMiddleware,
} from "./server.express.config";

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

  // Application Logger
  const applicationLogger = appLoggerMaker(configuration);

  return {
    application,
    configuration,
    logger: applicationLogger,
    useCases: {
      testUseCase: {
        // eslint-disable-next-line @typescript-eslint/require-await
        execute: async () => {
          applicationLogger.log(
            "info",
            "I am inside the execution of a test use case",
          );
        },
      },
    },
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
