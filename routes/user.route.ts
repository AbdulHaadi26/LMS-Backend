import express from "express";
import passport from "passport";
import { profile } from "../controllers/user.controller";

const router = express.Router();

router.get(
  `/profile`,
  passport.authenticate("jwt", { session: false }),
  profile
);

export { router as userRouter };
