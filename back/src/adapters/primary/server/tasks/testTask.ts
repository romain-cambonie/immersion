import { Server } from "../../../../ports/Server";
import { applicationConfigurationFromEnvProcess } from "../../configuration/applicationConfiguration";
import { createServerFromApplicationConfiguration } from "../server.express";

const server = createServerFromApplicationConfiguration(
  // TODO Add 'TASK' environement configuration and configure with another logic.
  applicationConfigurationFromEnvProcess(),
);

const testTask = (server: Server) => async () => {
  server.logger.log("info", "Initiating Test Task");
  await server.useCases.testUseCase.execute();
  server.logger.log("info", "Test Task Finished !");
};

testTask(server)()
  .then(() => {
    server.logger.log("info", "Finished successfully");
    process.exit(0);
  })
  .catch((error) => {
    server.logger.log("error", "Task failed with error : ", error);
    process.exit(1);
  });
