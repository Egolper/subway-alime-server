import express from "express";
import { StationController } from "../controllers";
import { asyncErrorCatcher, decodeRequest } from "../middlewares";
import { StationService } from "../services";
import { getStationResponseList } from "../utils";

const router = express.Router();
router.use("/", decodeRequest);

router.get("/", StationController.findStations);
router.get("/mockup", (req, res) => {
  res.send(StationService.transferStationList(getStationResponseList()));
});

router.delete(
  "/",
  asyncErrorCatcher(async (req, res) => {
    const result = await StationService.deleteStationByID(req.body.id);
    res.send(result);
  })
);

export default router;
