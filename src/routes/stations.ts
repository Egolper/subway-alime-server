import express from "express";
import { StationController } from "../controllers";
import { decodeRequest } from "../middlewares";

const router = express.Router();
router.use("/", decodeRequest);

router.get("/", StationController.findStations);

export default router;
