"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineRoutes = void 0;
const auth_route_1 = require("./auth.route");
const tenant_route_1 = require("./tenant.route");
const user_route_1 = require("./user.route");
const defineRoutes = (app) => {
    app.use(`/api/tenant`, tenant_route_1.tenantRouter);
    app.use(`/api/auth`, auth_route_1.authRouter);
    app.use(`/api/user`, user_route_1.userRouter);
};
exports.defineRoutes = defineRoutes;
