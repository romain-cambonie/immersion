import { Middleware, Request, Response } from "../../../ports/Server";

// TODO Implement it ourselves si on le veux car c'est deprecated.
//import expressPrometheusMiddleware from "express-prometheus-middleware";

// Expose application metrics for prometheus.
// The metrics exposed allows to calculate common metrics :
// - RED (Request, Error rate, Duration of requests)
// - USE (Utilisation, Error rate, and Saturation)
export const prometheusMetricsMiddleware: Middleware = (req: Request, res: Response, next?: () => void) => {
  console.log("prometheusMetricsMiddleware doesn't do anything right now");
  if(next) next();
}
/*
  expressPrometheusMiddleware({
  metricsPath: "/__metrics",
  collectDefaultMetrics: true,
});*/
