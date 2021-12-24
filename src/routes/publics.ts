import express from "express";
import { PublicController } from "../controllers";
import { decodeRequest } from "../middlewares";

const router = express.Router();
router.use("/", decodeRequest);

router.get("/stations", PublicController.getStations);
router.get("/stations/:id/time-table", PublicController.getTimeTable);

export default router;
