import { MigrationBuilder } from "node-pg-migrate";

export const up = (pgm: MigrationBuilder) => {
  pgm.addConstraint("immersion_applications", "fk_agency_id", {
    foreignKeys: {
      columns: "agency_id",
      references: `agencies(id)`,
    },
  });
};

export const down = (pgm: MigrationBuilder) => {
  pgm.dropConstraint("immersion_applications", "fk_agency_id");
};
