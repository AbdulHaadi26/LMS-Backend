"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantSchemaValidator = void 0;
const joi_1 = __importDefault(require("joi"));
const TenantSchemaValidator = joi_1.default.object({
    _id: joi_1.default.object().required(),
    name: joi_1.default.string().required(),
    createdAt: joi_1.default.date(),
    updatedAt: joi_1.default.date(),
    isActive: joi_1.default.boolean(),
});
exports.TenantSchemaValidator = TenantSchemaValidator;
