import { MigrationBuilder } from "node-pg-migrate";

export const up = (pgm: MigrationBuilder) => {
  pgm.renameColumn("establishments", "creation_date", "created_at");
  pgm.renameColumn("immersion_offers", "creation_date", "created_at");
};

export const down = (pgm: MigrationBuilder) => {
  pgm.renameColumn("establishments", "created_at", "creation_date");
  pgm.renameColumn("immersion_offers", "created_at", "creation_date");
};
