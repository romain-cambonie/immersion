import {
  Request as ExpressRequest,
  Response as ExpressResponse,
  Express,
} from "express";
import { AppLogger } from "./AppLogger";
import { AllApplicationConfigurationKinds } from "./ApplicationConfigurationKinds";
import { UseCases } from "./UseCases";

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
  configuration: AllApplicationConfigurationKinds;
  logger: AppLogger;
  useCases: UseCases;
};
