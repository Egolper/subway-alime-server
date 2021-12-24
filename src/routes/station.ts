import express from "express";
import { asyncErrorCatcher, validatorErrorChecker } from "../middlewares";
const router = express.Router();

router.get(
  "/",
  validatorErrorChecker,
  asyncErrorCatcher(async (req, res) => {})
);

export default router;
