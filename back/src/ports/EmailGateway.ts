//import { TemplatedEmail } from "shared/src/email/email";

/*export type EmailGateway = {
  sendEmail: ({
    type,
    recipients
              }: {
    type: string;
    recipients: string[]
  }) => Promise<void>;
}*/

export type EmailGateway = {
  sendEmail: ({
    templateId,
    to,
  }: {
    templateId: number;
    to: string[];
  }) => Promise<void>;
};
