import { MigrationBuilder } from "node-pg-migrate";

export const up = (pgm: MigrationBuilder) => {
  pgm.createTable("immersion_assessments", {
    convention_id: {
      type: "uuid",
      primaryKey: true,
      references: "immersion_applications",
      notNull: true,
    },
    status: { type: "text", notNull: true },
    establishment_feedback: { type: "text", notNull: true },
    created_at: { type: "timestamptz", default: pgm.func("now()") },
    updated_at: { type: "timestamptz", default: pgm.func("now()") },
  });
};

export const down = (pgm: MigrationBuilder) => {
  pgm.dropTable("immersion_assessments");
};
