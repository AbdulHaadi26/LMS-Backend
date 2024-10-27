"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const passport_1 = __importDefault(require("passport"));
const user_controller_1 = require("../controllers/user.controller");
const router = express_1.default.Router();
exports.userRouter = router;
router.get(`/profile`, passport_1.default.authenticate("jwt", { session: false }), user_controller_1.profile);
