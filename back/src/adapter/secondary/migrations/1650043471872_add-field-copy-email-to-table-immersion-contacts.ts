import { MigrationBuilder } from "node-pg-migrate";

export const up = (pgm: MigrationBuilder) => {
  pgm.addColumn("immersion_contacts", {
    copy_emails: { type: "jsonb", default: "[]", notNull: true },
  });
};

export const down = (pgm: MigrationBuilder) => {
  pgm.dropColumn("immersion_contacts", "copy_emails");
};
