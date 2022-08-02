import { MigrationBuilder } from "node-pg-migrate";

export const up = (pgm: MigrationBuilder) => {
  pgm.addColumns("establishments", {
    website: { type: "varchar(255)", notNull: false, default: "" },
    additional_information: {
      type: "varchar(255)",
      notNull: false,
      default: "",
    },
  });
  pgm.addColumns("form_establishments", {
    website: { type: "varchar(255)", notNull: false, default: "" },
    additional_information: {
      type: "varchar(255)",
      notNull: false,
      default: "",
    },
  });
};

export const down = (pgm: MigrationBuilder) => {
  pgm.dropColumns("establishments", ["website", "additional_information"]);
  pgm.dropColumns("form_establishments", ["website", "additional_information"]);
};
