import express from "express";
import { decodeRequest } from "../middlewares";
import { StationModel } from "../models";
import { StationService } from "../services";
import { getStationResponseList, subwayRouteMapper } from "../utils";

const router = express.Router();
router.use("/", decodeRequest);

router.get("/transfered", async (req, res) => {
  const list = getStationResponseList();

  const result = list.filter((v) => {
    return !!subwayRouteMapper[v.subwayRouteName];
  });

  res.send(result);
});

router.get("/호선", async (req, res) => {
  const station = {
    역이름: "총신대입구(이수)",
    stationList: [
      {
        subwayRouteName: "서울 4호선",
        subwayStationId: "MTRS14432",
        subwayStationName: "총신대입구(이수)",
      },
      {
        subwayRouteName: "서울 7호선",
        subwayStationId: "MTRS57736",
        subwayStationName: "총신대입구(이수)",
      },
    ],
  };

  const 전철역 = await StationService.collect전철역(station);

  const result = await StationModel.findOneAndUpdate(
    { 역이름: "총신대입구(이수)" },
    { ...전철역 },
    { upsert: true, new: true, setDefaultsOnInsert: true }
  );

  res.send(result);
});

export default router;
