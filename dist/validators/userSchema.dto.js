"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchemaValidator = void 0;
const joi_1 = __importDefault(require("joi"));
const UserSchemaValidator = joi_1.default.object({
    _id: joi_1.default.object().required(),
    name: joi_1.default.string().optional(),
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().required(),
    birthday: joi_1.default.date().optional(),
    gender: joi_1.default.string().optional(),
    cnic: joi_1.default.string().optional(),
    personalNo: joi_1.default.string().optional(),
    contactNo: joi_1.default.string().optional(),
    vendorNo: joi_1.default.string().optional(),
    scale: joi_1.default.string().optional(),
    type: joi_1.default.string().required(),
    createdAt: joi_1.default.date(),
    updatedAt: joi_1.default.date(),
    tenantId: joi_1.default.object().required(),
    isActive: joi_1.default.boolean(),
});
exports.UserSchemaValidator = UserSchemaValidator;
