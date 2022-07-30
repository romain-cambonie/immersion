import { Request as ExpressRequest, Response as ExpressResponse, Router as ExpressRouter, Express } from "express";
import { ApplicationConfiguration } from "./ApplicationConfiguration";
import { AppLogger } from "./AppLogger";

//export type RequestHandler = ExpressRequestHandler;
export type Request = ExpressRequest;
export type Response = ExpressResponse;
export type Middleware = (req: Request, res: Response, next: () => void) => void;
export type Application = Express;
export type Router = ExpressRouter;

export type Server = {
  application: Application
  configuration: ApplicationConfiguration
  logger: AppLogger
}