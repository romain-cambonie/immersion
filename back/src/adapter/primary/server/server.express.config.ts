import express from "express";
import { ApplicationConfiguration } from "../../../ports/ApplicationConfiguration";
import { AppLogger } from "../../../ports/AppLogger";
import { Middleware } from "../../../ports/Server";
import { createConsoleLogger } from "../configuration/AppLoggerConsole";
import { createPinoLogger } from "../configuration/AppLoggerPino";
import { consoleHttpLoggerMiddleware } from "../middlewares/consoleHttpLoggerMiddleware";
import { consoleMetricsMiddleware } from "../middlewares/consoleMetricsMiddleware";
import { pinoHttpLoggerMiddleware } from "../middlewares/pinoHttpLoggerMiddleware";
import { prometheusMetricsMiddleware } from "../middlewares/prometheusMetricsMiddleware";

export const requestBodyToJsonMiddleware = express.json({ limit: "10mb" });

export const httpLoggerMiddlewareMaker = ({
  environment,
}: ApplicationConfiguration): Middleware => {
  switch (environment) {
    case "production":
      return pinoHttpLoggerMiddleware;

    case "local":
    case "test":
      return consoleHttpLoggerMiddleware;
  }
};

export const metricsMiddlewareMaker = ({
  environment,
}: ApplicationConfiguration): Middleware => {
  switch (environment) {
    case "production":
      return prometheusMetricsMiddleware;

    case "local":
    case "test":
      return consoleMetricsMiddleware;
  }
};

export const appLoggerMaker = ({
  environment,
}: ApplicationConfiguration): AppLogger => {
  switch (environment) {
    case "production":
      return createPinoLogger("server");

    case "local":
    case "test":
      return createConsoleLogger();
  }
};
