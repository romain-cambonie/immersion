import { Router } from "express";
import { backRoutes } from "shared";
import { Request, Response } from "../../../../ports/Server";

export const rootRouterMaker = (): Router => {
  const rootRouter = Router();

  rootRouter
    .route(backRoutes.root)
    .get((_req: Request, res: Response): Response => res.send("Hello World !"));

  return rootRouter;
};
