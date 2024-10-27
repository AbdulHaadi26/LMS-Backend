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
exports.TenantModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const tenant_schema_1 = require("../schemas/tenant.schema");
const tenantSchema_dto_1 = require("../validators/tenantSchema.dto");
tenant_schema_1.TenantSchema.index({ _id: 1, name: 1, isActive: 1 });
tenant_schema_1.TenantSchema.pre("validate", function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        yield tenantSchema_dto_1.TenantSchemaValidator.validateAsync(this.toObject());
        next();
    });
});
const TenantModel = mongoose_1.default.model("tenants", tenant_schema_1.TenantSchema);
exports.TenantModel = TenantModel;
