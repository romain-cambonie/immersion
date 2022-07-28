import express, { Express, Router } from "express";

import { AbsoluteUrl, HttpResponse, ManagedAxios, TargetUrlsMapper } from "@serenity-dev/http-client";

const PORT: number = parseInt(process.env.PORT ?? '1234');

const app: Express = express();

// The types of Body this app is able to send back
app.use(express.json({ limit: '10mb' }));

app.get("/", ((_req: express.Request, res: express.Response): express.Response => res.send("Hello World !")));

// Registering some routes
const testRouter: Router = Router();

testRouter.route("/test").get(
  async (_req: express.Request, res: express.Response) => res.json(await testGateway())
);
app.use(testRouter);

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});




// This a basic implementation of a gateway that call an external service
type FeatureCollection = {
  features: Feature[]
} ;

type Feature = {
  type: string,
  geometry: any,
  properties: any
}

const testGateway = async (): Promise<{ [key:string]: any }> => {
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
      timeout: 5000
    }
  });

  const result = featureCollectionTypeguard(response.data);
  console.log(" result ", result);
  if (!result)
    return {};

  const featureCollection = response.data as FeatureCollection;

  console.log(" featureCollection.features[0] ", featureCollection.features[0]);

  return  featureCollection.features[0];
}

const featureCollectionTypeguard = (data: any): data is FeatureCollection => {
  console.log(data);
  console.log(" !!data.features[0] ", !!data.features[0]);
  console.log(" data.features[0].type === \"Feature\" ", data.features[0].type === "Feature");
  console.log(" !!data.features[0].geometry ",!!data.features[0].geometry);
  console.log(" !!data.features[0].properties ", !!data.features[0].properties);

  return !!data &&
    !!data.features[0] &&
    data.features[0].type === "Feature" &&
    !!data.features[0].geometry &&
    !!data.features[0].properties;
}
