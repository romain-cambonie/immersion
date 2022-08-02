import { MigrationBuilder } from "node-pg-migrate";

export const up = (pgm: MigrationBuilder) => {
  pgm.addColumn("immersion_applications", {
    work_conditions: { type: "varchar", notNull: false },
  });
};

export const down = (pgm: MigrationBuilder) => {
  pgm.dropColumn("immersion_applications", "work_conditions");
};
