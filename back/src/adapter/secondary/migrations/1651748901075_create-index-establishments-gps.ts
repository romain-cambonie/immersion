import { MigrationBuilder } from "node-pg-migrate";

export const up = (pgm: MigrationBuilder) => {
  pgm.sql(
    `CREATE INDEX establishments_gps ON establishments USING GIST (geography(gps));`,
  );
};

export const down = (pgm: MigrationBuilder) => {
  pgm.dropIndex("establishments", "", { name: "establishments_gps" });
};
