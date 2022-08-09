// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import supertest from "supertest";
import type { SuperTest, Test } from "supertest";
import { backRoutes } from "../../../../routes";
import { createServerFromApplicationConfiguration } from "../../server/server.express";
import { Server } from "../../../../ports/Server";

/*describe("Hello world route", () => {
  let request: SuperTest<Test>;

  beforeEach(async () => {
    const { app } = await createApp(new AppConfigBuilder().build());
    request = supertest(app);
  });

  it("says hello", async () => {
    const response = await request.get("/");
    expect(response.body).toEqual({ message: "Hello World !" });
  });
});*/

describe(`Server: '${backRoutes.test}' route`, () => {
  let request: SuperTest<Test>;

  beforeEach(() => {
    const { application }: Server = createServerFromApplicationConfiguration({
      environment: "test",
    });
    request = supertest(application);
  });

  it("says hello", async () => {
    const response = await request.get(backRoutes.test);
    expect(response.body).toStrictEqual([
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [4.790584, 45.75916] },
        properties: {
          label: "61 Rue des Aqueducs 69005 Lyon",
          score: 0.8826381818181818,
          housenumber: "61",
          id: "69385_0415_00061",
          name: "61 Rue des Aqueducs",
          postcode: "69005",
          citycode: "69385",
          x: 839173.14,
          y: 6519306.51,
          city: "Lyon",
          district: "Lyon 5e Arrondissement",
          context: "69, Rhône, Auvergne-Rhône-Alpes",
          type: "housenumber",
          importance: 0.70902,
          street: "Rue des Aqueducs",
        },
      },
    ]);
  });
});
