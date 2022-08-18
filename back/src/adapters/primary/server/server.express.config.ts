import express from "express";
import { AppLogger } from "../../../ports/AppLogger";
import {
  AllApplicationConfigurationKinds,
  EnvironmentTypes,
} from "../../../ports/ApplicationConfiguration";
import { Middleware } from "../../../ports/Server";
import { createConsoleLogger } from "../configuration/AppLoggerConsole";
import { consoleHttpLoggerMiddleware } from "../middlewares/consoleHttpLoggerMiddleware";
import { consoleMetricsMiddleware } from "../middlewares/consoleMetricsMiddleware";
import { pinoHttpLoggerMiddleware } from "../middlewares/pinoHttpLoggerMiddleware";
import { prometheusMetricsMiddleware } from "../middlewares/prometheusMetricsMiddleware";

export const requestBodyToJsonMiddleware = express.json({ limit: "10mb" });

// REVIEW 1
// Avoir un maker avec une déconstruction est intéressant si on a besoin de plusieurs propriétés car ça respecte l'open close
export const httpLoggerMiddlewareMaker = ({
  environment,
}: AllApplicationConfigurationKinds): Middleware => {
  switch (environment) {
    case "production":
      return pinoHttpLoggerMiddleware;

    case "local":
    case "test":
      return consoleHttpLoggerMiddleware;

    // We do not put a default value on purpose to have a type error
    // (in case of additional environment value that would not be explicitly defined)
  }
};

// REVIEW 1 cont
// Si on a un seul prop et un check de type de type au niveau du record il est surement intéressant d'avoir cette construction
export const metricMiddlewareByEnvironment: Record<
  EnvironmentTypes,
  Middleware
> = {
  production: prometheusMetricsMiddleware,
  local: consoleMetricsMiddleware,
  test: consoleMetricsMiddleware,
};

// REVIEW
// with const, without condition
/*export const metricsMiddlewareMaker = ({
  environment,
}: ApplicationConfiguration): Middleware => metricMiddlewareByEnvironment[environment];*/

export const appLoggerMaker = ({
  environment,
}: AllApplicationConfigurationKinds): AppLogger => {
  // REVIEW
  // with condition, without const (stateless)
  switch (environment) {
    case "production":
      return createConsoleLogger();
    //return createPinoLogger("server");

    case "local":
    case "test":
      return createConsoleLogger();
  }
};
