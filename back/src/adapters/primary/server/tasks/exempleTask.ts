import { Server } from "../../../../ports/Server";
import { createServerFromApplicationConfiguration } from "../server.express";

// Initialise server with needed environment variables for the task use case execution
const server = createServerFromApplicationConfiguration({
  environment: "production",
});

// The server should contain all dependencies needed for the use case execution
const exempleTask = (server: Server) => async () => {
  server.logger.log("info", "Initiating Test Task");
  await server.useCases.testUseCase.execute();
  server.logger.log("info", "Test Task Finished !");
};

exempleTask(server)()
  .then(() => {
    server.logger.log("info", "Finished successfully");
    process.exit(0);
  })
  .catch((error) => {
    server.logger.log("error", "Task failed with error : ", error);
    process.exit(1);
  });
