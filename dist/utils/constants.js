"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PREDEFINED_RESPONSE_TEXTS = void 0;
const enums_1 = require("./enums");
exports.PREDEFINED_RESPONSE_TEXTS = {
    401: enums_1.ResponseCodeTexts.UNAUTHORIZED,
    403: enums_1.ResponseCodeTexts.FORBIDDEN,
    500: enums_1.ResponseCodeTexts.INTERNAL_SERVER_ERROR,
};
