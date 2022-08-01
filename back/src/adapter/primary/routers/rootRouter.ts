import { Router } from "express";
import { Request, Response } from "../../../ports/Server";

export const rootRouterMaker = (): Router => {
  const rootRouter = Router();

  rootRouter
    .route(`/`)
    .get((_req: Request, res: Response): Response => res.send("Hello World !"));

  return rootRouter;
};
