"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantSchema = void 0;
const mongoose_1 = require("mongoose");
const TenantSchema = new mongoose_1.Schema({
    _id: { type: Object, required: true },
    name: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    isActive: { type: Boolean, default: true },
});
exports.TenantSchema = TenantSchema;
