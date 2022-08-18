type BackEndRoutes = "root" | "test";
type Route = `/${string}`;

export const backRoutes: Record<BackEndRoutes, Route> = {
  root: "/",
  test: "/test",
};
