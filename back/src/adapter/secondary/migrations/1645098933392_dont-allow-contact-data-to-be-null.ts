import { MigrationBuilder } from "node-pg-migrate";

export const up = (pgm: MigrationBuilder) => {
  pgm.alterColumn("immersion_contacts", "email", { notNull: true });
  pgm.alterColumn("immersion_contacts", "lastname", { notNull: true });
  pgm.alterColumn("immersion_contacts", "firstname", { notNull: true });
  pgm.alterColumn("immersion_contacts", "role", { notNull: true });
  pgm.alterColumn("immersion_contacts", "siret_establishment", {
    notNull: true,
  });
};

export const down = (pgm: MigrationBuilder) => {
  pgm.alterColumn("immersion_contacts", "email", { notNull: false });
  pgm.alterColumn("immersion_contacts", "lastname", { notNull: false });
  pgm.alterColumn("immersion_contacts", "firstname", { notNull: false });
  pgm.alterColumn("immersion_contacts", "role", { notNull: false });
  pgm.alterColumn("immersion_contacts", "siret_establishment", {
    notNull: false,
  });
};
