import express from "express";
import passport from "passport";
import { create, find, findOne } from "../controllers/invoice.controller";

const router = express.Router();

router.get(``, passport.authenticate("jwt", { session: false }), find);
router.get(
  `/:invoiceId`,
  passport.authenticate("jwt", { session: false }),
  findOne
);
router.post(``, passport.authenticate("jwt", { session: false }), create);

export { router as invoiceRouter };
