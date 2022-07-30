import { EnvironmentTypes } from "../../../ports/ApplicationConfiguration";
import { applicationConfigurationFromEnvProcess, throwIfNotDefined, throwIfNotInArray } from "./application";
import * as dotenv from "dotenv";

describe("applicationConfiguration", () => {
  const authorizedValuesRecord: Record<EnvironmentTypes, any> = {local: null, production: null, test: null};
  const authorizedValuesFromRecord: string[] = Object.keys(authorizedValuesRecord).sort();
  const authorizedValuesTyped: EnvironmentTypes[] = ["local", "production", "test"];


  it("should throw if a authorizedValues does not contain all possible values from the type", () => {
    expect(authorizedValuesFromRecord).toStrictEqual(authorizedValuesTyped);
  });

  it("should throw if a variable is not defined or in array", () => {
    // This is for test purpose and should never be done.
    const prevNodeEnvValue = process.env.NODE_ENV;
    process.env.NODE_ENV = "lol";

    const authorizedValuesTyped: EnvironmentTypes[] = ["test", "local", "production"];
    expect(() => { throwIfNotInArray<EnvironmentTypes>({
      variableName: "NODE_ENV",
      authorizedValues: authorizedValuesTyped
    }) }).toThrow(Error(`Expected NODE_ENV to be one of : test | local | production, got : 'lol'`));

    // We reassign the value for not to impact other tests
    process.env.NODE_ENV = prevNodeEnvValue;
  });

  it("should throw if a variable is not defined", () => {
    expect(() => { throwIfNotDefined("TESTING") }).toThrow(Error(`Expected TESTING environment variable to be defined and not empty`));
  });

  it("should return the expected configuration from env", () => {
    // This is for test purpose and should never be done.
    const prevPORTValue = process.env.PORT;
    process.env.PORT = '3000';

    expect(applicationConfigurationFromEnvProcess()).toStrictEqual({
      "environment": "test",
      "port": 3000,
    });

    // We reassign the value for not to impact other tests
    process.env.PORT = prevPORTValue;
  });
});

