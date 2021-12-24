import express from "express";
import {
  asyncErrorCatcher,
  decodeRequest,
  validatorErrorChecker,
} from "../middlewares";
const router = express.Router();

router.use("/", decodeRequest);

router.get(
  "/",
  validatorErrorChecker,
  asyncErrorCatcher(async (req, res) => {})
);

export default router;
