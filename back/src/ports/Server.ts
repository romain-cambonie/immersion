import {
  Request as ExpressRequest,
  Response as ExpressResponse,
  Express,
} from "express";
import { AppLogger } from "./AppLogger";
import { ApplicationConfiguration } from "./ApplicationConfiguration";

//export type RequestHandler = ExpressRequestHandler;
export type Request = ExpressRequest;
export type Response = ExpressResponse;

export type Middleware = (
  req: Request,
  res: Response,
  next: () => void,
) => void;

export type Application = Express;

export type Server = {
  application: Application;
  configuration: ApplicationConfiguration;
  logger: AppLogger;
};
