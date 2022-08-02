import { MigrationBuilder } from "node-pg-migrate";

export const up = (pgm: MigrationBuilder) => {
  pgm.renameTable("appellations_public_data", "public_appelations_data");
  pgm.renameTable("romes_public_data", "public_romes_data");
  pgm.renameTable("naf_classes_2008", "public_naf_classes_2008");
};

export const down = (pgm: MigrationBuilder) => {
  pgm.renameTable("public_appelations_data", "appellations_public_data");
  pgm.renameTable("public_romes_data", "romes_public_data");
  pgm.renameTable("public_naf_classes_2008", "naf_classes_2008");
};
