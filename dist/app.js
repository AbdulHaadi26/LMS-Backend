"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const middlewares_1 = require("./middlewares");
require("./utils/db");
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(middlewares_1.passport.initialize());
app.use(middlewares_1.responseFormatter);
const routes_1 = require("./routes");
(0, routes_1.defineRoutes)(app);
app.listen(port, () => {
    console.info(`Server is running at http://localhost:${port}`);
});
