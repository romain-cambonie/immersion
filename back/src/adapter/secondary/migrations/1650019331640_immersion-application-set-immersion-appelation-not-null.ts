import { MigrationBuilder } from "node-pg-migrate";

export const up = (pgm: MigrationBuilder) => {
  pgm.alterColumn("immersion_applications", "immersion_appellation", {
    notNull: true,
  });
};

export const down = (pgm: MigrationBuilder) => {
  pgm.alterColumn("immersion_applications", "immersion_appellation", {
    notNull: false,
  });
};
