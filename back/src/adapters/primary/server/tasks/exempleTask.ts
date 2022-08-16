import { Server } from "../../../../ports/Server";
import { createServerFromApplicationConfiguration } from "../server.express";

// Initialise server with needed environment variables for the task use case execution
const server = createServerFromApplicationConfiguration({
  environment: "production",
});

// The server should contain all dependencies needed for the use case execution
const exempleTask = (server: Server) => async () => {
  await server.useCases.testUseCase.execute();
};

exempleTask(server)()
  .then(() => {
    server.logger.log("info", "Task finished successfully");
    process.exit(0);
  })
  .catch((error) => {
    server.logger.log("error", "Task failed with error : ", error);
    process.exit(1);
  });
