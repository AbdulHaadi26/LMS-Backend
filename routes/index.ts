import { authRouter } from "./auth.route";
import { tenantRouter } from "./tenant.route";

const defineRoutes = (app: any) => {
  app.use(`/api/tenant`, tenantRouter);
  app.use(`/api/auth`, authRouter);
};

export { defineRoutes };
