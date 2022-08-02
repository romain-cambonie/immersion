import { MigrationBuilder } from "node-pg-migrate";

export const up = (pgm: MigrationBuilder) => {
  pgm.sql(` 
    UPDATE establishments
    SET source_provider = 'api_labonneboite'
    WHERE establishments.data_source = 'api_labonneboite';
  `);

  pgm.sql(` 
    UPDATE establishments
    SET source_provider = 'api_laplateformedelinclusion'
    WHERE establishments.data_source = 'api_laplateformedelinclusion';
  `);

  pgm.alterColumn("establishments", "source_provider", {
    type: "text",
    notNull: true,
  });

  pgm.alterColumn("establishments", "data_source", {
    type: "text",
    notNull: true,
  });
};

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const down = () => {};
