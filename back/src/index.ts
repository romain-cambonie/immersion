import { applicationConfigurationFromEnvProcess } from "./adapter/primary/configuration/applicationConfiguration";
import {
  createServerFromApplicationConfiguration,
  startServerInProductionModeMaker,
} from "./adapter/primary/server/server.express";

const server = createServerFromApplicationConfiguration(
  applicationConfigurationFromEnvProcess(),
);

startServerInProductionModeMaker(server)();
