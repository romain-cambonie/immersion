import { MigrationBuilder } from "node-pg-migrate";

export const up = (pgm: MigrationBuilder) => {
  pgm.addColumn("searches_made", {
    voluntary_to_immersion: { type: "boolean" },
  });
  pgm.addColumn("searches_made", {
    api_consumer_name: { type: "varchar(255)" },
  });
};

export const down = (pgm: MigrationBuilder) => {
  pgm.dropColumn("searches_made", "voluntary_to_immersion");
  pgm.dropColumn("searches_made", "api_consumer_name");
};
