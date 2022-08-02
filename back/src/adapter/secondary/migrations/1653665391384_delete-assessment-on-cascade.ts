import { MigrationBuilder } from "node-pg-migrate";

export const up = (pgm: MigrationBuilder) => {
  pgm.dropConstraint(
    "immersion_assessments",
    "immersion_assessments_convention_id_fkey",
  );
  pgm.addConstraint(
    "immersion_assessments",
    "immersion_assessments_convention_id_fkey",
    {
      foreignKeys: {
        columns: "convention_id",
        references: "immersion_applications(id)",
        onDelete: "CASCADE", // If a Convention is deleted, will delete the referencing assessment
      },
    },
  );
};

export const down = (pgm: MigrationBuilder) => {
  pgm.dropConstraint(
    "immersion_assessments",
    "immersion_assessments_convention_id_fkey",
  );
  pgm.addConstraint(
    "immersion_assessments",
    "immersion_assessments_convention_id_fkey",
    {
      foreignKeys: {
        columns: "convention_id",
        references: "immersion_applications(id)",
      },
    },
  );
};
