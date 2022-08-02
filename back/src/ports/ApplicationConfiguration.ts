export type EnvironmentTypes = "local" | "production" | "test";

export type ApplicationConfiguration =
  | ProductionApplicationConfiguration
  | SuperTestApplicationConfiguration;

export type ProductionApplicationConfiguration = {
  environment: EnvironmentTypes;
  port: number;
};

export type SuperTestApplicationConfiguration = {
  environment: EnvironmentTypes;
};

export const isProductionApplicationConfiguration = (
  configuration: ApplicationConfiguration,
): configuration is ProductionApplicationConfiguration =>
  "port" in configuration;
