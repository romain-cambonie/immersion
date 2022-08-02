/* eslint-disable @typescript-eslint/naming-convention */
import { MigrationBuilder } from "node-pg-migrate";

export const up = (pgm: MigrationBuilder) => {
  pgm.createTable("convention_external_ids", {
    convention_id: "uuid",
    external_id: { type: "serial", unique: true, notNull: true },
  });

  pgm.addConstraint(
    "convention_external_ids",
    "convention_external_ids_convention_id_fkey",
    {
      foreignKeys: {
        columns: "convention_id",
        references: "immersion_applications(id)",
        onDelete: "CASCADE", // If a Convention is deleted, will delete the referencing external id
      },
    },
  );
};

export const down = (pgm: MigrationBuilder) => {
  pgm.dropTable("convention_external_id");
};
