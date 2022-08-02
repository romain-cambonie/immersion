import { MigrationBuilder } from "node-pg-migrate";

export const up = (pgm: MigrationBuilder) => {
  pgm.renameColumn("agencies", "code", "code_safir");
};

export const down = (pgm: MigrationBuilder) => {
  pgm.renameColumn("agencies", "code_safir", "code");
};
