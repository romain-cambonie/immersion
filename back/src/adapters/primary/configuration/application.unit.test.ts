import { EnvironmentTypes } from "../../../ports/ApplicationConfigurationKinds";
import {
  applicationConfigurationFromEnvProcess,
  throwIfNotDefined,
  throwIfNotInArray,
} from "./applicationConfiguration";

describe("applicationConfiguration", () => {
  const authorizedValuesRecord: Record<EnvironmentTypes, null> = {
    local: null,
    production: null,
    test: null,
  };
  const authorizedValuesFromRecord: string[] = Object.keys(
    authorizedValuesRecord,
  ).sort();

  const authorizedValuesTyped: EnvironmentTypes[] = [
    "local",
    "production",
    "test",
  ];

  it("should throw if a authorizedValues does not contain all possible values from the type", () => {
    expect(authorizedValuesFromRecord).toStrictEqual(authorizedValuesTyped);
  });

  it("should throw if a variable is not defined or in array", () => {
    process.env.A_CUSTOM_VAR_MOCKING_NODE_DEV = "lol";

    const authorizedValuesTyped: EnvironmentTypes[] = [
      "test",
      "local",
      "production",
    ];
    expect(() => {
      throwIfNotInArray<EnvironmentTypes>({
        variableName: "A_CUSTOM_VAR_MOCKING_NODE_DEV",
        authorizedValues: authorizedValuesTyped,
      });
    }).toThrow(
      Error(
        `Expected A_CUSTOM_VAR_MOCKING_NODE_DEV to be one of : test | local | production, got : 'lol'`,
      ),
    );
  });

  it("should throw if a variable is not defined", () => {
    expect(() => {
      throwIfNotDefined("TESTING");
    }).toThrow(
      Error(
        `Expected TESTING environment variable to be defined and not empty`,
      ),
    );
  });

  // This is for test purpose and should never be done in a non-test env
  it("should return the expected configuration from env", () => {
    const prevPORTValue = process.env.PORT;
    process.env.PORT = "3000";

    expect(applicationConfigurationFromEnvProcess()).toStrictEqual({
      environment: "test",
      port: 3000,
    });

    // We reassign the value for not to impact other tests
    process.env.PORT = prevPORTValue;
  });
});
