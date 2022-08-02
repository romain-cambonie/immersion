import { MigrationBuilder } from "node-pg-migrate";

export const up = (pgm: MigrationBuilder) => {
  pgm.renameColumn("immersion_contacts", "role", "job");
};

export const down = (pgm: MigrationBuilder) => {
  pgm.renameColumn("immersion_contacts", "job", "role");
};
