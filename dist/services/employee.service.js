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
exports.getProfile = exports.getEmployeeByEmail = exports.employeeExists = exports.createAdminEmployee = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const user_model_1 = require("../models/user.model");
const types_1 = require("../types");
const createAdminEmployee = (email, password, tenantId) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = {
        _id: new mongoose_1.default.Types.ObjectId(),
        email: email,
        password: password,
        type: types_1.UserTypes.ADMIN,
        tenantId: tenantId,
    };
    yield user_model_1.UserModel.create(userData);
    return userData;
});
exports.createAdminEmployee = createAdminEmployee;
const employeeExists = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const employee = yield user_model_1.UserModel.findOne({ email: new RegExp(`^${email}$`, "i") }, {
        _id: 1,
    });
    if (employee === null || employee === void 0 ? void 0 : employee._id) {
        throw new Error("Employee already exists");
    }
});
exports.employeeExists = employeeExists;
const getEmployeeByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const employee = yield user_model_1.UserModel.findOne({ email: email, isActive: true }, {
        password: 1,
        email: 1,
        tenantId: 1,
    });
    if (!(employee === null || employee === void 0 ? void 0 : employee._id)) {
        throw new Error("Employee not found");
    }
    return employee;
});
exports.getEmployeeByEmail = getEmployeeByEmail;
const getProfile = (_id, tenantId) => __awaiter(void 0, void 0, void 0, function* () {
    const employee = yield user_model_1.UserModel.findOne({
        _id: new mongoose_1.default.Types.ObjectId(_id),
        tenantId: new mongoose_1.default.Types.ObjectId(tenantId),
        isActive: true,
    }, {
        _id: 1,
        name: 1,
        email: 1,
        tenantId: 1,
        type: 1,
    });
    if (!(employee === null || employee === void 0 ? void 0 : employee._id)) {
        throw new Error("Employee not found");
    }
    return employee;
});
exports.getProfile = getProfile;
