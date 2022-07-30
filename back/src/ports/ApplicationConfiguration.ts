export type EnvironmentTypes = "local" | "production" | "test";

export type ApplicationConfiguration = {
  environment: EnvironmentTypes,
  port: number
}