import { Server } from "../../../../ports/Server";
import { createServerFromApplicationConfiguration } from "../server.express";

const server = createServerFromApplicationConfiguration({
  environment: "production",
});

const sendEmailsWithAssessmentCreationLink = (server: Server) => async () => {
  await server.useCases.sendEmailsWithAssessmentCreationLink.execute();
};

sendEmailsWithAssessmentCreationLink(server)()
  .then(() => {
    server.logger.log(
      "info",
      "SendEmailsWithAssessmentCreationLink finished successfully",
    );
    process.exit(0);
  })
  .catch((error) => {
    server.logger.log(
      "error",
      "SendEmailsWithAssessmentCreationLink failed with error : ",
      error,
    );
    process.exit(1);
  });
