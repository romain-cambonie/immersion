import { MigrationBuilder } from "node-pg-migrate";

export const up = (pgm: MigrationBuilder) => {
  pgm.addColumns("immersion_applications", {
    emergency_contact: { type: "varchar(255)", notNull: false },
    emergency_contact_phone: { type: "varchar(255)", notNull: false },
  });
};

export const down = (pgm: MigrationBuilder) => {
  pgm.dropColumns("immersion_applications", [
    "emergency_contact",
    "emergency_contact_phone",
  ]);
};
