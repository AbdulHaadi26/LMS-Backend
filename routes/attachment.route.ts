import express from "express";
import passport from "passport";
import { presignURL } from "../controllers/attachment.controller";

const router = express.Router();

router.post(``, passport.authenticate("jwt", { session: false }), presignURL);

export { router as attachmentRouter };
