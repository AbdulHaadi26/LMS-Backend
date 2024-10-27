"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roleAuthorization = void 0;
const utils_1 = require("../utils");
const roleAuthorization = (requiredRoles) => {
    return (req, res, next) => {
        if (!req.user) {
            return res.error(utils_1.ResponseCodes.UNAUTHORIZED, "Unauthorized");
        }
        const user = req.user;
        if (!requiredRoles.includes(user.userType)) {
            return res.error(utils_1.ResponseCodes.FORBIDDEN, "Forbidden");
        }
        next();
    };
};
exports.roleAuthorization = roleAuthorization;
