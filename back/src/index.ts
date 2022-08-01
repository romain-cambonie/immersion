import "dotenv/config"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import { applicationConfigurationFromEnvProcess } from "./adapter/primary/configuration/application";
import { createServerFromApplicationConfiguration } from "./adapter/primary/server/server.express";

const server = createServerFromApplicationConfiguration(
  applicationConfigurationFromEnvProcess(),
);

server.application.listen(server.configuration.port, () => {
  server.logger.log(
    "info",
    `server started with env: ${server.configuration.environment} at http://localhost:${server.configuration.port}`,
  );
});
