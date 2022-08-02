import { MigrationBuilder } from "node-pg-migrate";

export const up = (pgm: MigrationBuilder) => {
  pgm.renameColumn("immersion_contacts", "name", "lastname");
};

export const down = (pgm: MigrationBuilder) => {
  pgm.renameColumn("immersion_contacts", "lastname", "name");
};
