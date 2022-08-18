export type EnvironmentTypes = "local" | "production" | "test";

export type AllApplicationConfigurationKinds =
  | ApplicationConfigurationKinds
  | TaskApplicationConfiguration;

export type ApplicationConfigurationKinds =
  | ProductionApplicationConfiguration
  | SuperTestApplicationConfiguration
  | LocalApplicationConfiguration;

export type TaskApplicationConfiguration = {
  environment: "production";
};

export type ProductionApplicationConfiguration = {
  environment: "production";
  port: number;
};

export type LocalApplicationConfiguration = {
  environment: "local";
  port: number;
};

export type SuperTestApplicationConfiguration = {
  environment: "test";
};

export const isProductionApplicationConfiguration = (
  configuration: AllApplicationConfigurationKinds,
): configuration is ProductionApplicationConfiguration =>
  configuration.environment === "production" && "port" in configuration;
