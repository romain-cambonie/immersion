import {
  ApplicationConfiguration,
  EnvironmentTypes,
} from "../../../ports/ApplicationConfiguration";

export const applicationConfigurationFromEnvProcess =
  (): ApplicationConfiguration => ({
    environment: throwIfNotInArray<EnvironmentTypes>({
      variableName: "NODE_ENV",
      authorizedValues: ["test", "local", "production"],
    }),
    port: parseInt(throwIfNotDefined("PORT")),
  });

type ThrowIfNotInArrayParams<T> = {
  authorizedValues: T[];
  variableName: string;
};

export const isTruthy = <T extends string>(
  element: T | undefined,
): element is T => !!element;

export const throwIfNotInArray = <T extends string>({
  authorizedValues,
  variableName,
}: ThrowIfNotInArrayParams<T>): T => {
  const envValue = process.env[variableName]?.trim();
  const value = envValue as T;
  if (!isTruthy(value) || !authorizedValues.includes(value))
    throw new Error(
      `Expected ${variableName} to be one of : ` +
        `${authorizedValues.join(" | ")}, ` +
        `got : '${envValue}'`,
    );
  return value;
};

export const throwIfNotDefined = (variableName: string): string => {
  const value = process.env[variableName]?.trim();
  if (!isTruthy(value))
    throw new Error(
      `Expected ${variableName} environment variable to be defined and not empty`,
    );
  return value;
};
