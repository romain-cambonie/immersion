import { applicationConfigurationFromEnvProcess } from "./adapters/primary/configuration/applicationConfiguration";
import {
  createServerFromApplicationConfiguration,
  startServerInProductionModeMaker,
} from "./adapters/primary/server/server.express";

const server = createServerFromApplicationConfiguration(
  applicationConfigurationFromEnvProcess(),
);

startServerInProductionModeMaker(server)();
