import { MigrationBuilder } from "node-pg-migrate";

export const up = (pgm: MigrationBuilder) => {
  pgm.addColumn("establishments", {
    is_searchable: {
      type: "boolean",
      notNull: true,
      default: true,
    },
  });
  pgm.addColumn("form_establishments", {
    is_searchable: {
      type: "boolean",
      notNull: true,
      default: true,
    },
  });
};

export const down = (pgm: MigrationBuilder) => {
  pgm.dropColumn("establishments", "is_searchable");
  pgm.dropColumn("form_establishments", "is_searchable");
};
