import { MigrationBuilder } from "node-pg-migrate";

export const up = (pgm: MigrationBuilder) => {
  pgm.alterColumn("immersion_contacts", "contact_mode", {
    type: "varchar(255)",
  });

  pgm.dropType("contact_mode");
  pgm.createType("contact_mode", ["PHONE", "EMAIL", "IN_PERSON"]);
  pgm.alterColumn("immersion_contacts", "contact_mode", {
    type: "contact_mode",
    using: "UPPER(REPLACE(contact_mode, 'mail', 'email'))::contact_mode",
  });
};

export const down = (pgm: MigrationBuilder) => {
  pgm.alterColumn("immersion_contacts", "contact_mode", {
    type: "varchar(255)",
  });
  pgm.dropType("contact_mode");
  pgm.createType("contact_mode", ["phone", "mail", "in_person"]);
  pgm.alterColumn("immersion_contacts", "contact_mode", {
    type: "contact_mode",
    using: "LOWER(REPLACE(contact_mode, 'email', 'mail'))::contact_mode",
  });
};
