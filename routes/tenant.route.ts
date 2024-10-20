import express from "express";
import { create } from "../controllers/tenant.controller";

const router = express.Router();

router.post(`register`, create);

export { router as tenantRouter };
