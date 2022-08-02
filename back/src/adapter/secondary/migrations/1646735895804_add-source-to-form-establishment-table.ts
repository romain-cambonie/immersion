import { MigrationBuilder } from "node-pg-migrate";

export const up = (pgm: MigrationBuilder) => {
  pgm.addColumn("form_establishments", {
    source: {
      type: "varchar(255)",
      notNull: true,
      default: "immersion-facile",
    },
  });
};

export const down = (pgm: MigrationBuilder) => {
  pgm.dropColumn("form_establishments", "source");
};
