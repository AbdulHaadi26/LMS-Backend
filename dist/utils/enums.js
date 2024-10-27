"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceTypes = exports.SQSEventType = exports.DBTypes = exports.Envioronments = exports.ResponseCodeTexts = exports.ResponseCodes = void 0;
var ResponseCodes;
(function (ResponseCodes) {
    ResponseCodes[ResponseCodes["SUCCESS"] = 200] = "SUCCESS";
    ResponseCodes[ResponseCodes["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    ResponseCodes[ResponseCodes["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    ResponseCodes[ResponseCodes["FORBIDDEN"] = 403] = "FORBIDDEN";
    ResponseCodes[ResponseCodes["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
})(ResponseCodes || (exports.ResponseCodes = ResponseCodes = {}));
var ResponseCodeTexts;
(function (ResponseCodeTexts) {
    ResponseCodeTexts["SUCCESS"] = "Success";
    ResponseCodeTexts["BAD_REQUEST"] = "Bad Request";
    ResponseCodeTexts["FORBIDDEN"] = "Forbidden";
    ResponseCodeTexts["UNAUTHORIZED"] = "Unauthorized";
    ResponseCodeTexts["INTERNAL_SERVER_ERROR"] = "Internal Server Error";
})(ResponseCodeTexts || (exports.ResponseCodeTexts = ResponseCodeTexts = {}));
var Envioronments;
(function (Envioronments) {
    Envioronments["LOCAL"] = "local";
    Envioronments["DEVELOPMENT"] = "development";
    Envioronments["PRODUCTION"] = "production";
})(Envioronments || (exports.Envioronments = Envioronments = {}));
var DBTypes;
(function (DBTypes) {
    DBTypes["MYSQL"] = "mysql";
    DBTypes["POSTGRES"] = "postgres";
    DBTypes["SQLITE"] = "sqlite";
})(DBTypes || (exports.DBTypes = DBTypes = {}));
var SQSEventType;
(function (SQSEventType) {
    SQSEventType["EMPLOYEE_ANALYTICS"] = "EMPLOYEE_ANALYTICS";
})(SQSEventType || (exports.SQSEventType = SQSEventType = {}));
var DeviceTypes;
(function (DeviceTypes) {
    DeviceTypes["ANDROID"] = "ANDROID";
    DeviceTypes["IOS"] = "IOS";
    DeviceTypes["WEB"] = "WEB";
})(DeviceTypes || (exports.DeviceTypes = DeviceTypes = {}));
