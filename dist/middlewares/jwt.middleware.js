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
exports.passport = void 0;
const passport_1 = __importDefault(require("passport"));
exports.passport = passport_1.default;
const passport_jwt_1 = require("passport-jwt");
// declare global {
//   namespace Express {
//     interface Request {
//       user: JWTPayloadType;
//     }
//   }
// }
const opts = {
    jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET,
};
const JWTStartegy = (jwt_payload, done) => __awaiter(void 0, void 0, void 0, function* () {
    if (jwt_payload === null || jwt_payload === void 0 ? void 0 : jwt_payload._id) {
        return done(null, jwt_payload);
    }
    return done(null, false);
});
passport_1.default.use(new passport_jwt_1.Strategy(opts, JWTStartegy));
