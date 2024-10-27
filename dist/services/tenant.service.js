"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTenant = exports.tenantExists = exports.getTenantById = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const tenant_model_1 = require("../models/tenant.model");
const getTenantById = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    const tenant = yield tenant_model_1.TenantModel.findOne({
        _id: new mongoose_1.default.Types.ObjectId(_id),
        isActive: true,
    });
    if (!(tenant === null || tenant === void 0 ? void 0 : tenant._id)) {
        throw new Error("Tenant not found");
    }
    return tenant;
});
exports.getTenantById = getTenantById;
const tenantExists = (name) => __awaiter(void 0, void 0, void 0, function* () {
    const tenant = yield tenant_model_1.TenantModel.findOne({
        name: new RegExp(`^${name}$`, "i"),
    });
    if (tenant === null || tenant === void 0 ? void 0 : tenant._id) {
        throw new Error("Tenant already exists");
    }
});
exports.tenantExists = tenantExists;
const createTenant = (name) => __awaiter(void 0, void 0, void 0, function* () {
    const data = {
        _id: new mongoose_1.default.Types.ObjectId(),
        name: name,
    };
    yield tenant_model_1.TenantModel.create(data);
    return data;
});
exports.createTenant = createTenant;
