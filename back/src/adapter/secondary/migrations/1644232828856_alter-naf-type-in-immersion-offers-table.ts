import { MigrationBuilder } from "node-pg-migrate";

export const up = (pgm: MigrationBuilder) => {
  pgm.alterColumn("immersion_offers", "naf", { type: "char(5)" });
};

export const down = (pgm: MigrationBuilder) => {
  pgm.alterColumn("immersion_offers", "naf", { type: "char(255)" });
};
