import { MigrationBuilder } from "node-pg-migrate";

export const up = (pgm: MigrationBuilder) => {
  pgm.createTable("api_consumers", {
    id: { type: "uuid", primaryKey: true },
    consumer: { type: "varchar(255)", notNull: true },
    description: { type: "varchar(255)" },
    is_authorized: { type: "bool", notNull: true },
    created_at: { type: "timestamptz", notNull: true },
    expiration_date: { type: "timestamptz", notNull: true },
  });
};

export const down = (pgm: MigrationBuilder) => {
  pgm.dropTable("api_consumers");
};
