import { EmailGateway } from "../ports/EmailGateway";
import { UseCase } from "../ports/UseCases";

export const SendEmailsWithAssessmentCreationLinkMaker = (
  gateway: EmailGateway,
): UseCase => ({
  // eslint-disable-next-line @typescript-eslint/require-await
  execute: async () => {
    await gateway.sendEmail({
      templateId: 1,
      to: ["romain.cambonie@gmail.com"],
    });
  },
});
