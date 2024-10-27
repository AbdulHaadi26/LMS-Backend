import { attachmentRouter } from "./attachment.route";
import { authRouter } from "./auth.route";
import { tenantRouter } from "./tenant.route";
import { userRouter } from "./user.route";

const defineRoutes = (app: any) => {
  app.use(`/api/tenant`, tenantRouter);
  app.use(`/api/auth`, authRouter);
  app.use(`/api/user`, userRouter);
  app.use(`/api/attachment`, attachmentRouter);
};

export { defineRoutes };
