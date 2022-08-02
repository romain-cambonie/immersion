import { MigrationBuilder } from "node-pg-migrate";

export const up = (pgm: MigrationBuilder) => {
  pgm.alterColumn("immersion_offers", "uuid", { notNull: true });
  pgm.addConstraint("immersion_offers", "pk_uuid", { primaryKey: "uuid" });
};

export const down = (pgm: MigrationBuilder) => {
  pgm.dropConstraint("immersion_offers", "pk_uuid");
  pgm.alterColumn("immersion_offers", "uuid", { notNull: false });
};
