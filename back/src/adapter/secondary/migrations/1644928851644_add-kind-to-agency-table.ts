import { MigrationBuilder } from "node-pg-migrate";

export const up = (pgm: MigrationBuilder) => {
  pgm.addColumn("agencies", {
    kind: { type: "varchar(255)" },
  });

  pgm.sql("UPDATE agencies SET kind = 'autre' WHERE kind IS NULL");

  pgm.alterColumn("agencies", "kind", { notNull: true });
};

export const down = (pgm: MigrationBuilder) => {
  pgm.dropColumn("agencies", "kind");
};
