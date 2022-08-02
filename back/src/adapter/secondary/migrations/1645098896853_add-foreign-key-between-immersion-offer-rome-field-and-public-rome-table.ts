import { MigrationBuilder } from "node-pg-migrate";

export const up = (pgm: MigrationBuilder) => {
  pgm.addConstraint("immersion_offers", "fk_rome", {
    foreignKeys: {
      columns: "rome",
      references: "romes_public_data(code_rome)",
    },
  });
};

export const down = (pgm: MigrationBuilder) => {
  pgm.dropConstraint("immersion_offers", "fk_rome");
};
