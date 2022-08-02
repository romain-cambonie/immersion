import { MigrationBuilder } from "node-pg-migrate";

export const up = (pgm: MigrationBuilder) => {
  pgm.createView(
    "view_offers_from_form_establishment",
    { replace: true },
    `SELECT 
      io.update_date, 
      e.name, 
      rome_label, 
      appellation_label,
      io.siret
      FROM immersion_offers AS io
      LEFT JOIN establishments AS e ON io.siret = e.siret
      LEFT JOIN view_appellations_dto vad ON io.rome_appellation = vad.appellation_code
      WHERE data_source = 'form'
      ORDER BY (io.update_date, e.name)`,
  );
};

export const down = (pgm: MigrationBuilder) => {
  pgm.dropView("view_offers_from_form_establishment");
};
