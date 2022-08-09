// Need to have a correct bundling process in CI to either
// - bundle shared with front and back
// - build and install it like an external package
// https://www.codecapers.com.au/sharing-typescript-code-between-projects/
type BackEndRoutes = "root" | "test";
type Route = `/${string}`;

export const backRoutes: Record<BackEndRoutes, Route> = {
  root: "/",
  test: "/test",
};
