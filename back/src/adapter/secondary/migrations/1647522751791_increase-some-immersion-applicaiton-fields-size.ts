import { MigrationBuilder } from "node-pg-migrate";

export const up = (pgm: MigrationBuilder) => {
  pgm.alterColumn("immersion_applications", "immersion_objective", {
    type: "text",
  });
  pgm.alterColumn("immersion_applications", "immersion_activities", {
    type: "text",
    notNull: true,
  });
  pgm.alterColumn("immersion_applications", "immersion_skills", {
    type: "text",
  });
};

export const down = (pgm: MigrationBuilder) => {
  pgm.alterColumn("immersion_applications", "immersion_objective", {
    type: "varchar(255)",
  });
  pgm.alterColumn("immersion_applications", "immersion_activities", {
    type: "varchar(255)",
    notNull: true,
  });
  pgm.alterColumn("immersion_applications", "immersion_skills", {
    type: "varchar(255)",
  });
};
