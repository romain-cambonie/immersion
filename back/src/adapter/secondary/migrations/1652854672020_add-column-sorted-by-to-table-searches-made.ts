import { MigrationBuilder } from "node-pg-migrate";

export const up = (pgm: MigrationBuilder) => {
  pgm.createType("sorted_by", ["distance", "date"]);
  pgm.addColumn("searches_made", {
    sorted_by: { type: "sorted_by", notNull: true, default: "distance" },
  });
};

export const down = (pgm: MigrationBuilder) => {
  pgm.dropColumn("searches_made", "sorted_by");
  pgm.dropType("sorted_by");
};
