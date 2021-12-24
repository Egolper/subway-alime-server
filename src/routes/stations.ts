import express from "express";
import { StationController } from "../controllers";
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

router.get("/:id", StationController.getTimeTable);

export default router;
