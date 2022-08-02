import { MigrationBuilder } from "node-pg-migrate";

export const up = (pgm: MigrationBuilder) => {
  pgm.addColumn("establishments", {
    source_provider: {
      type: "varchar(255)",
    },
  });

  pgm.sql(`
    WITH cci_from_form AS (SELECT siret FROM form_establishments WHERE source = 'cci') 
    UPDATE establishments
    SET source_provider = 'cci' 
       FROM cci_from_form
    WHERE establishments.siret = cci_from_form.siret;
  `);

  pgm.sql(`
    WITH ujus_from_form AS (SELECT siret FROM form_establishments WHERE source = 'unJeuneUneSolution') 
    UPDATE establishments
    SET source_provider = 'unJeuneUneSolution' 
       FROM ujus_from_form
    WHERE establishments.siret = ujus_from_form.siret;
  `);

  pgm.sql(`
    WITH imf_from_form AS (SELECT siret FROM form_establishments WHERE source = 'immersion-facile') 
    UPDATE establishments
    SET source_provider = 'immersion-facile' 
       FROM imf_from_form
    WHERE establishments.siret = imf_from_form.siret;
  `);
};

export const down = (pgm: MigrationBuilder) => {
  pgm.dropColumn("establishments", "source_provider");
};
