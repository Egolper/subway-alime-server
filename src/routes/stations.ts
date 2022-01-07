import express from "express";
import { StationController } from "../controllers";
import { decodeRequest } from "../middlewares";
import { StationService } from "../services";
import {
  getStationResponseList,
  getTransferedStationList,
  subwayRouteMapper,
} from "../utils";

const router = express.Router();
router.use("/", decodeRequest);

router.get("/", StationController.findStations);
router.get("/mockup", (req, res) => {
  res.send(StationService.transferStationList(getStationResponseList()));
});

router.get("/transfered", async (req, res) => {
  const list = getStationResponseList();

  const result = list.filter((v) => {
    return !!subwayRouteMapper[v.subwayRouteName];
  });

  console.log(result.length);

  res.send(result);
});

export default router;
