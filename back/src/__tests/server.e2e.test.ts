import supertest, { SuperTest, Test } from "supertest";
import { createServerFromApplicationConfiguration } from "../adapter/primary/server/server.express";
import { ApplicationConfiguration } from "../ports/ApplicationConfiguration";
import { Server } from "../ports/Server";

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

describe("Server: '/' route", () => {
  let request: SuperTest<Test>;

  beforeEach(() => {
    const { application }: Server = createServerFromApplicationConfiguration({
      environment: "test",
    } as ApplicationConfiguration);
    request = supertest(application);
  });

  it("says hello", async () => {
    const response = await request.get("/");
    expect(response.text).toBe("Hello World !");
  });
});
