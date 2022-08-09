import {
  AbsoluteUrl,
  HttpResponse,
  ManagedAxios,
  TargetUrlsMapper,
} from "@serenity-dev/http-client";

import { Router } from "express";
import { backRoutes } from "../shared/src/adapters/primary/routes";
import { Request, Response } from "../../../../ports/Server";

export const testRouterMaker = (): Router => {
  const agenciesRouter = Router();

  agenciesRouter
    .route(backRoutes.test)
    .get(async (_req: Request, res: Response) => res.json(await testGateway()));

  return agenciesRouter;
};

// This a basic implementation of a gateway that call an external service
type FeatureCollection = {
  features: Feature[];
};

type Feature = {
  type: string;
  geometry: object;
  properties: object;
};

const testGateway = async (): Promise<Feature[]> => {
  type TargetUrls = "ADDRESS_API_ENDPOINT";

  const targetToValidSearchUrl = (rawQueryString: string): AbsoluteUrl =>
    `https://api-adresse.data.gouv.fr/search/?q=${encodeURI(
      rawQueryString,
    )}&limit=1` as AbsoluteUrl;

  const targetUrls: TargetUrlsMapper<TargetUrls> = {
    ADDRESS_API_ENDPOINT: targetToValidSearchUrl,
  };

  const client: ManagedAxios<TargetUrls> = new ManagedAxios(targetUrls);

  const response: HttpResponse = await client.get({
    target: client.targetsUrls.ADDRESS_API_ENDPOINT,
    targetParams: "61 rue des Aqueducs, 69005",
    adapterConfig: {
      timeout: 5000,
    },
  });

  if (!featureCollectionTypeguard(response.data as FeatureCollection))
    return [];

  return (response.data as FeatureCollection).features;
};

const featureCollectionTypeguard = (data: {
  features: { type: string; geometry: object; properties: object }[];
}): data is FeatureCollection =>
  !!data &&
  "features" in data &&
  !!data.features[0] &&
  data.features[0].type === "Feature" &&
  !!data.features[0].geometry &&
  !!data.features[0].properties;
