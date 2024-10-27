"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseFormatter = void 0;
const utils_1 = require("../utils");
function responseFormatter(req, res, next) {
    res.success = (data, status = utils_1.ResponseCodes.SUCCESS) => {
        res.status(status).json(data);
    };
    res.error = (status, error) => {
        var _a;
        console.log(error);
        const predefinedText = utils_1.PREDEFINED_RESPONSE_TEXTS[status];
        res.status(status).json({
            status,
            message: (_a = predefinedText !== null && predefinedText !== void 0 ? predefinedText : error === null || error === void 0 ? void 0 : error.message) !== null && _a !== void 0 ? _a : "An error occurred",
        });
    };
    next();
}
exports.responseFormatter = responseFormatter;
