import { MigrationBuilder } from "node-pg-migrate";

export const up = (pgm: MigrationBuilder) => {
  pgm.addColumn("agencies", {
    agency_siret: { type: "char(14)", notNull: false },
    code: { type: "text", notNull: false },
  });
};

export const down = (pgm: MigrationBuilder) => {
  pgm.dropColumns("agencies", ["agency_siret", "code"]);
};
