import { AlterColumnOptions, MigrationBuilder } from "node-pg-migrate";

const timestamptWithTimezone = (): AlterColumnOptions => ({
  type: "timestamptz",
  notNull: true,
});

const timestamptWithTimezoneWithDefaultNow = (
  pgm: MigrationBuilder,
): AlterColumnOptions => ({
  ...timestamptWithTimezone(),
  default: pgm.func("now()"),
});

export const up = (pgm: MigrationBuilder) => {
  pgm.alterColumn(
    "immersion_applications",
    "created_at",
    timestamptWithTimezoneWithDefaultNow(pgm),
  );
  pgm.alterColumn(
    "immersion_applications",
    "updated_at",
    timestamptWithTimezoneWithDefaultNow(pgm),
  );
  pgm.alterColumn(
    "immersion_applications",
    "date_start",
    timestamptWithTimezone(),
  );
  pgm.alterColumn(
    "immersion_applications",
    "date_end",
    timestamptWithTimezone(),
  );
  pgm.alterColumn(
    "immersion_applications",
    "date_submission",
    timestamptWithTimezone(),
  );
};

export const down = (pgm: MigrationBuilder) => {
  pgm.alterColumn("immersion_applications", "created_at", {
    type: "timestamp",
  });
  pgm.alterColumn("immersion_applications", "updated_at", {
    type: "timestamp",
  });
  pgm.alterColumn("immersion_applications", "date_start", {
    type: "timestamp",
  });
  pgm.alterColumn("immersion_applications", "date_end", { type: "timestamp" });
  pgm.alterColumn("immersion_applications", "date_submission", {
    type: "timestamp",
  });
};
