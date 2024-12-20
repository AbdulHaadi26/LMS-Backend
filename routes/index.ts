import { attachmentRouter } from "./attachment.route";
import { authRouter } from "./auth.route";
import { invoiceRouter } from "./invoice.route";
import { tenantRouter } from "./tenant.route";
import { userRouter } from "./user.route";

const defineRoutes = (app: any) => {
  app.use(`/api/tenant`, tenantRouter);
  app.use(`/api/auth`, authRouter);
  app.use(`/api/user`, userRouter);
  app.use(`/api/attachment`, attachmentRouter);
  app.use(`/api/invoice`, invoiceRouter);
};

export { defineRoutes };
