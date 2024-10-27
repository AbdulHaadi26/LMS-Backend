"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongoose_1 = require("mongoose");
const types_1 = require("../types");
const UserSchema = new mongoose_1.Schema({
    name: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    birthday: { type: Date },
    gender: { type: String },
    cnic: { type: String },
    personalNo: { type: String },
    contactNo: { type: String },
    vendorNo: { type: String },
    designation: { type: String },
    scale: { type: String },
    type: { type: String, enum: Object.values(types_1.UserTypes), required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    tenantId: { type: mongoose_1.Schema.Types.ObjectId, ref: "tenants", required: true },
    isActive: { type: Boolean, default: true },
});
exports.UserSchema = UserSchema;
