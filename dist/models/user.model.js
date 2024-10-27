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
exports.UserModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const user_schema_1 = require("../schemas/user.schema");
const userSchema_dto_1 = require("../validators/userSchema.dto");
const services_1 = require("../services");
user_schema_1.UserSchema.index({ _id: 1, email: 1, isActive: 1 });
user_schema_1.UserSchema.pre("validate", function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        yield userSchema_dto_1.UserSchemaValidator.validateAsync(this.toObject());
        next();
    });
});
user_schema_1.UserSchema.pre("save", function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        if (this.isModified("password")) {
            this.password = yield (0, services_1.hashString)(this.password);
        }
        next();
    });
});
const UserModel = mongoose_1.default.model("users", user_schema_1.UserSchema);
exports.UserModel = UserModel;
