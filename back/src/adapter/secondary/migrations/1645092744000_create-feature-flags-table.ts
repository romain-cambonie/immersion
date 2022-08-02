import { MigrationBuilder } from "node-pg-migrate";

export const up = (pgm: MigrationBuilder) => {
  pgm.createTable("feature_flags", {
    flag_name: { type: "varchar(255)", primaryKey: true },
    is_active: { type: "bool", notNull: true },
  });
  pgm.sql(
    "INSERT INTO feature_flags (flag_name, is_active) VALUES ('enableAdminUi', true);",
  );
  pgm.sql(
    "INSERT INTO feature_flags (flag_name, is_active) VALUES ('enableByPassInseeApi', false);",
  );
};

export const down = (pgm: MigrationBuilder) => {
  pgm.dropTable("feature_flags");
};
