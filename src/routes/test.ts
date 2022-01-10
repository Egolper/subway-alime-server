import express from "express";
import { decodeRequest } from "../middlewares";
import { StationModel } from "../models";
import { StationService } from "../services";

const router = express.Router();
router.use("/", decodeRequest);

router.get("/호선", async (req, res) => {
  const station = {
    역이름: "서울역",
    stationList: [
      {
        subwayRouteName: "공항",
        subwayStationId: "MTRARA1A01",
        subwayStationName: "서울역",
      },
      {
        subwayRouteName: "경의중앙",
        subwayStationId: "MTRKRK4P313",
        subwayStationName: "서울역",
      },
      {
        subwayRouteName: "서울 1호선",
        subwayStationId: "MTRS11133",
        subwayStationName: "서울역",
      },
      {
        subwayRouteName: "서울 4호선",
        subwayStationId: "MTRS14426",
        subwayStationName: "서울역",
      },
    ],
  };

  const 전철역 = await StationService.collect전철역(station);

  const result = await StationModel.findOneAndUpdate(
    { 역이름: "서울역" },
    { ...전철역 },
    { upsert: true, new: true, setDefaultsOnInsert: true }
  );

  res.send(result);
});

export default router;
