import { MigrationBuilder } from "node-pg-migrate";

export const up = (pgm: MigrationBuilder) => {
  pgm.addColumn("agencies", {
    logo_url: {
      type: "text",
    },
  });
};

export const down = (pgm: MigrationBuilder) => {
  pgm.dropColumn("agencies", "logo_url");
};
