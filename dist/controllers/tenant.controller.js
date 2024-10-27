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
exports.create = void 0;
const services_1 = require("../services");
const utils_1 = require("../utils");
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, password } = req.body;
        yield Promise.all([(0, services_1.employeeExists)(email), (0, services_1.tenantExists)(name)]);
        const tenant = yield (0, services_1.createTenant)(name);
        yield (0, services_1.createAdminEmployee)(email, password, tenant._id);
        res.success("Success");
    }
    catch (error) {
        res.error(utils_1.ResponseCodes.INTERNAL_SERVER_ERROR, error);
    }
});
exports.create = create;
