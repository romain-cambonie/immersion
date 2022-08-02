import { MigrationBuilder } from "node-pg-migrate";

export const up = (pgm: MigrationBuilder) => {
  pgm.sql(`
    UPDATE conventions SET status = 'ACCEPTED_BY_VALIDATOR'
    WHERE id IN (
        SELECT id
        FROM conventions
        WHERE status = 'VALIDATED'
        )`);
};

export const down = () => {
  // nothing to do
};
