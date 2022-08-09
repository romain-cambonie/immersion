import { Router } from "express";
import { Request, Response } from "../../../../ports/Server";
import { backRoutes } from "../shared/src/adapters/primary/routes";

export const rootRouterMaker = (): Router => {
  const rootRouter = Router();

  rootRouter
    .route(backRoutes.root)
    .get((_req: Request, res: Response): Response => res.send("Hello World !"));

  return rootRouter;
};
