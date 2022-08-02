import { MigrationBuilder } from "node-pg-migrate";

export const up = (pgm: MigrationBuilder) => {
  pgm.addColumns("establishments", {
    lat: {
      type: "float8",
      notNull: true,
      default: 0,
    },
    lon: {
      type: "float8",
      notNull: true,
      default: 0,
    },
  });
  pgm.sql(`
  UPDATE establishments 
  SET 
  lon=(((ST_AsGeoJSON(gps))::json -> 'coordinates') ->> 0)::float8,
  lat=(((ST_AsGeoJSON(gps))::json -> 'coordinates') ->> 1)::float8`);
};

export const down = (pgm: MigrationBuilder) => {
  pgm.dropColumns("establishments", ["lat", "lon"]);
};
