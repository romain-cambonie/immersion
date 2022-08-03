import type { MigrationBuilder } from "node-pg-migrate";

export const up = async (pgm: MigrationBuilder) => {
  pgm.sql(
    `
  INSERT INTO postal_code_department_region(postal_code,department,region) VALUES ('97133', 'Saint-Barthélemy', 'Saint-Barthélemy') ON CONFLICT DO NOTHING;
  INSERT INTO postal_code_department_region(postal_code,department,region) VALUES ('97150', 'Saint-Martin', 'Saint-Martin') ON CONFLICT DO NOTHING;
  INSERT INTO postal_code_department_region(postal_code,department,region) VALUES ('98610', 'Wallis-et-Futuna', 'Wallis-et-Futuna') ON CONFLICT DO NOTHING;
  INSERT INTO postal_code_department_region(postal_code,department,region) VALUES ('98620', 'Wallis-et-Futuna', 'Wallis-et-Futuna') ON CONFLICT DO NOTHING;
  INSERT INTO postal_code_department_region(postal_code,department,region) VALUES ('98600', 'Wallis-et-Futuna', 'Wallis-et-Futuna') ON CONFLICT DO NOTHING;
  INSERT INTO postal_code_department_region(postal_code,department,region) VALUES ('98760', 'Polynésie française', 'Polynésie française') ON CONFLICT DO NOTHING;
  INSERT INTO postal_code_department_region(postal_code,department,region) VALUES ('98701', 'Polynésie française', 'Polynésie française') ON CONFLICT DO NOTHING;
  INSERT INTO postal_code_department_region(postal_code,department,region) VALUES ('98730', 'Polynésie française', 'Polynésie française') ON CONFLICT DO NOTHING;
  INSERT INTO postal_code_department_region(postal_code,department,region) VALUES ('98704', 'Polynésie française', 'Polynésie française') ON CONFLICT DO NOTHING;
  INSERT INTO postal_code_department_region(postal_code,department,region) VALUES ('98763', 'Mascate', 'Mascate') ON CONFLICT DO NOTHING;
  INSERT INTO postal_code_department_region(postal_code,department,region) VALUES ('98764', 'Mascate', 'Mascate') ON CONFLICT DO NOTHING;
  INSERT INTO postal_code_department_region(postal_code,department,region) VALUES ('98787', 'Central Luzon', 'Central Luzon') ON CONFLICT DO NOTHING;
  INSERT INTO postal_code_department_region(postal_code,department,region) VALUES ('98765', 'Mascate', 'Mascate') ON CONFLICT DO NOTHING;
  INSERT INTO postal_code_department_region(postal_code,department,region) VALUES ('98740', 'Polynésie française', 'Polynésie française') ON CONFLICT DO NOTHING;
  INSERT INTO postal_code_department_region(postal_code,department,region) VALUES ('98792', 'Mascate', 'Mascate') ON CONFLICT DO NOTHING;
  INSERT INTO postal_code_department_region(postal_code,department,region) VALUES ('98767', 'Polynésie française', 'Polynésie française') ON CONFLICT DO NOTHING;
  INSERT INTO postal_code_department_region(postal_code,department,region) VALUES ('98768', 'Mascate', 'Mascate') ON CONFLICT DO NOTHING;
  INSERT INTO postal_code_department_region(postal_code,department,region) VALUES ('98705', 'Polynésie française', 'Polynésie française') ON CONFLICT DO NOTHING;
  INSERT INTO postal_code_department_region(postal_code,department,region) VALUES ('98706', 'Mascate', 'Mascate') ON CONFLICT DO NOTHING;
  INSERT INTO postal_code_department_region(postal_code,department,region) VALUES ('98707', 'Polynésie française', 'Polynésie française') ON CONFLICT DO NOTHING;
  INSERT INTO postal_code_department_region(postal_code,department,region) VALUES ('98749', 'Mascate', 'Mascate') ON CONFLICT DO NOTHING;
  INSERT INTO postal_code_department_region(postal_code,department,region) VALUES ('98731', 'Polynésie française', 'Polynésie française') ON CONFLICT DO NOTHING;
  INSERT INTO postal_code_department_region(postal_code,department,region) VALUES ('98709', 'Polynésie française', 'Polynésie française') ON CONFLICT DO NOTHING;
  INSERT INTO postal_code_department_region(postal_code,department,region) VALUES ('98789', 'Mascate', 'Mascate') ON CONFLICT DO NOTHING;
  INSERT INTO postal_code_department_region(postal_code,department,region) VALUES ('98771', 'Mascate', 'Mascate') ON CONFLICT DO NOTHING;
  INSERT INTO postal_code_department_region(postal_code,department,region) VALUES ('98728', 'Polynésie française', 'Polynésie française') ON CONFLICT DO NOTHING;
  INSERT INTO postal_code_department_region(postal_code,department,region) VALUES ('98729', 'Polynésie française', 'Polynésie française') ON CONFLICT DO NOTHING;
  INSERT INTO postal_code_department_region(postal_code,department,region) VALUES ('98772', 'Polynésie française', 'Polynésie française') ON CONFLICT DO NOTHING;
  INSERT INTO postal_code_department_region(postal_code,department,region) VALUES ('98742', 'Polynésie française', 'Polynésie française') ON CONFLICT DO NOTHING;
  INSERT INTO postal_code_department_region(postal_code,department,region) VALUES ('98788', 'Mascate', 'Mascate') ON CONFLICT DO NOTHING;
  INSERT INTO postal_code_department_region(postal_code,department,region) VALUES ('98711', 'Polynésie française', 'Polynésie française') ON CONFLICT DO NOTHING;
  INSERT INTO postal_code_department_region(postal_code,department,region) VALUES ('98712', 'Polynésie française', 'Polynésie française') ON CONFLICT DO NOTHING;
  INSERT INTO postal_code_department_region(postal_code,department,region) VALUES ('98714', 'Polynésie française', 'Polynésie française') ON CONFLICT DO NOTHING;
  INSERT INTO postal_code_department_region(postal_code,department,region) VALUES ('98716', 'Polynésie française', 'Polynésie française') ON CONFLICT DO NOTHING;
  INSERT INTO postal_code_department_region(postal_code,department,region) VALUES ('98774', 'Polynésie française', 'Polynésie française') ON CONFLICT DO NOTHING;
  INSERT INTO postal_code_department_region(postal_code,department,region) VALUES ('98718', 'Polynésie française', 'Polynésie française') ON CONFLICT DO NOTHING;
  INSERT INTO postal_code_department_region(postal_code,department,region) VALUES ('98750', 'Polynésie française', 'Polynésie française') ON CONFLICT DO NOTHING;
  INSERT INTO postal_code_department_region(postal_code,department,region) VALUES ('98775', 'Polynésie française', 'Polynésie française') ON CONFLICT DO NOTHING;
  INSERT INTO postal_code_department_region(postal_code,department,region) VALUES ('98776', 'Mascate', 'Mascate') ON CONFLICT DO NOTHING;
  INSERT INTO postal_code_department_region(postal_code,department,region) VALUES ('98778', 'Polynésie française', 'Polynésie française') ON CONFLICT DO NOTHING;
  INSERT INTO postal_code_department_region(postal_code,department,region) VALUES ('98779', 'Central Luzon', 'Central Luzon') ON CONFLICT DO NOTHING;
  INSERT INTO postal_code_department_region(postal_code,department,region) VALUES ('98780', 'Washington', 'Washington') ON CONFLICT DO NOTHING;
  INSERT INTO postal_code_department_region(postal_code,department,region) VALUES ('98752', 'Polynésie française', 'Polynésie française') ON CONFLICT DO NOTHING;
  INSERT INTO postal_code_department_region(postal_code,department,region) VALUES ('98752', 'Polynésie française', 'Polynésie française') ON CONFLICT DO NOTHING;
  INSERT INTO postal_code_department_region(postal_code,department,region) VALUES ('98752', 'Polynésie française', 'Polynésie française') ON CONFLICT DO NOTHING;
  INSERT INTO postal_code_department_region(postal_code,department,region) VALUES ('98752', 'Polynésie française', 'Polynésie française') ON CONFLICT DO NOTHING;
  INSERT INTO postal_code_department_region(postal_code,department,region) VALUES ('98795', 'Central Luzon', 'Central Luzon') ON CONFLICT DO NOTHING;
  INSERT INTO postal_code_department_region(postal_code,department,region) VALUES ('98753', 'Polynésie française', 'Polynésie française') ON CONFLICT DO NOTHING;
  INSERT INTO postal_code_department_region(postal_code,department,region) VALUES ('98743', 'Polynésie française', 'Polynésie française') ON CONFLICT DO NOTHING;
  INSERT INTO postal_code_department_region(postal_code,department,region) VALUES ('98719', 'Polynésie française', 'Polynésie française') ON CONFLICT DO NOTHING;
  INSERT INTO postal_code_department_region(postal_code,department,region) VALUES ('98719', 'Polynésie française', 'Polynésie française') ON CONFLICT DO NOTHING;
  INSERT INTO postal_code_department_region(postal_code,department,region) VALUES ('98720', 'Polynésie française', 'Polynésie française') ON CONFLICT DO NOTHING;
  INSERT INTO postal_code_department_region(postal_code,department,region) VALUES ('98722', 'Mascate', 'Mascate') ON CONFLICT DO NOTHING;
  INSERT INTO postal_code_department_region(postal_code,department,region) VALUES ('98781', 'Mascate', 'Mascate') ON CONFLICT DO NOTHING;
  INSERT INTO postal_code_department_region(postal_code,department,region) VALUES ('98783', 'Polynésie française', 'Polynésie française') ON CONFLICT DO NOTHING;
  INSERT INTO postal_code_department_region(postal_code,department,region) VALUES ('98754', 'Polynésie française', 'Polynésie française') ON CONFLICT DO NOTHING;
  INSERT INTO postal_code_department_region(postal_code,department,region) VALUES ('98744', 'Central Luzon', 'Central Luzon') ON CONFLICT DO NOTHING;
  INSERT INTO postal_code_department_region(postal_code,department,region) VALUES ('98839', 'Mascate', 'Mascate') ON CONFLICT DO NOTHING;
  INSERT INTO postal_code_department_region(postal_code,department,region) VALUES ('98884', 'Central Luzon', 'Central Luzon') ON CONFLICT DO NOTHING;
  INSERT INTO postal_code_department_region(postal_code,department,region) VALUES ('98885', 'Mascate', 'Mascate') ON CONFLICT DO NOTHING;
  INSERT INTO postal_code_department_region(postal_code,department,region) VALUES ('98878', 'Mascate', 'Mascate') ON CONFLICT DO NOTHING;
  INSERT INTO postal_code_department_region(postal_code,department,region) VALUES ('98876', 'Central Luzon', 'Central Luzon') ON CONFLICT DO NOTHING;
  INSERT INTO postal_code_department_region(postal_code,department,region) VALUES ('98877', 'Mascate', 'Mascate') ON CONFLICT DO NOTHING;    
  `,
  );
};

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const down = () => {};
