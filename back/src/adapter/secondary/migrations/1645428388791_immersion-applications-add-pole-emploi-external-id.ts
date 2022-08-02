import type { MigrationBuilder } from "node-pg-migrate";

export const up = (pgm: MigrationBuilder) => {
  pgm.addColumn("immersion_applications", {
    pe_external_id: { type: "varchar(255)" },
  });
};

export const down = (pgm: MigrationBuilder) => {
  pgm.dropColumn("immersion_applications", "pe_external_id");
};
