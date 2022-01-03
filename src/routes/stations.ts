import express from "express";
import { StationController } from "../controllers";
import { decodeRequest } from "../middlewares";
import { StationService } from "../services";
import { getStationResponseList, getTransferedStationList } from "../utils";

const router = express.Router();
router.use("/", decodeRequest);

router.get("/", StationController.findStations);
router.get("/mockup", (req, res) => {
  res.send(StationService.transferStationList(getStationResponseList()));
});
router.get("/transfered", async (req, res) => {
  const list = getTransferedStationList();

  const result = await StationService.collect전철역(list[0]);

  res.send(result);
});

export default router;
