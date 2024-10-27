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
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const services_1 = require("../services");
const utils_1 = require("../utils");
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const employee = yield (0, services_1.getEmployeeByEmail)(email);
        const tenant = yield (0, services_1.getTenantById)(String(employee.tenantId));
        const isPasswordValid = yield (0, services_1.compareHash)(password, employee.password);
        if (!isPasswordValid) {
            return res.error(utils_1.ResponseCodes.UNAUTHORIZED, "Invalid credentials");
        }
        const token = (0, services_1.signToken)({
            _id: employee._id,
            userType: employee.type,
            tenantId: tenant._id,
        });
        res.success({ token });
    }
    catch (error) {
        res.error(utils_1.ResponseCodes.INTERNAL_SERVER_ERROR, error);
    }
});
exports.login = login;
