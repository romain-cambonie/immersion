import {
  AbsoluteUrl,
  HttpResponse,
  ManagedAxios,
  TargetUrlsMapper,
} from "@serenity-dev/http-client";
import { Router } from "express";
import { Request, Response } from "../../../ports/Server";

export const testRouterMaker = () => {
  const agenciesRouter = Router();

  agenciesRouter
    .route(`/test`)
    .get(async (_req: Request, res: Response) => res.json(await testGateway()));

  return agenciesRouter;
};

// This a basic implementation of a gateway that call an external service
type FeatureCollection = {
  features: Feature[];
};

type Feature = {
  type: string;
  geometry: any;
  properties: any;
};

const testGateway = async (): Promise<{ [key: string]: any }> => {
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

  const result = featureCollectionTypeguard(response.data);
  if (!result) return {};

  const featureCollection = response.data as FeatureCollection;

  return featureCollection.features[0];
};

const featureCollectionTypeguard = (data: any): data is FeatureCollection =>
  !!data &&
  !!data.features[0] &&
  data.features[0]?.type === "Feature" &&
  !!data.features[0]?.geometry &&
  !!data.features[0]?.properties;
