import express from "express";
import { PublicController } from "../controllers";
import { decodeRequest } from "../middlewares";
import { StationService } from "../services";

const router = express.Router();
router.use("/", decodeRequest);

router.get("/stations", PublicController.getStations);
router.get("/stations/:id/time-table", PublicController.getTimeTable);

router.get("/collect/example", async (res, req) => {
  const data = await StationService.collect전철역({
    역이름: "서울역",
    stationList: [
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
    ],
  });

  req.send(data);
});

export default router;
