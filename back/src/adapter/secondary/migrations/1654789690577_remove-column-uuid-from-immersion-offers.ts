import { MigrationBuilder } from "node-pg-migrate";

export const up = (pgm: MigrationBuilder) => {
  pgm.dropColumn("immersion_offers", "uuid");
};

export const down = (pgm: MigrationBuilder) => {
  pgm.sql(
    `CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
     ALTER TABLE immersion_offers ADD uuid uuid PRIMARY KEY DEFAULT uuid_generate_v4();`,
  );
};
