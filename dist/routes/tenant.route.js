"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tenantRouter = void 0;
const express_1 = __importDefault(require("express"));
const tenant_controller_1 = require("../controllers/tenant.controller");
const router = express_1.default.Router();
exports.tenantRouter = router;
router.post(`/register`, tenant_controller_1.create);
