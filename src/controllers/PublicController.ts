import { RequestHandler } from "express";
import { param, query } from "express-validator";
import { asyncErrorCatcher, validatorErrorChecker } from "../middlewares";
import { StationService, TimeTableService } from "../services";
import {
  dailyTypeCodeList,
  dailyTypeCodeType,
  upDownTypeCodeList,
  upDownTypeCodeType,
} from "../utils";

/* ----------------  ---------------- */

export const getStations: RequestHandler[] = [
  validatorErrorChecker,
  asyncErrorCatcher(async (req, res) => {
    const data = await StationService.getStations(req.query);
    res.send(data);
  }),
];

/* ----------------  ---------------- */

export const getTimeTable: RequestHandler[] = [
  param("id").notEmpty(),
  query("dailyTypeCode").isIn(dailyTypeCodeList),
  query("upDownTypeCode").isIn(upDownTypeCodeList),
  validatorErrorChecker,
  asyncErrorCatcher(async (req, res) => {
    const data = await TimeTableService.getStationTimeTable({
      subwayStationId: req.params.id,
      dailyTypeCode: req.query.dailyTypeCode as dailyTypeCodeType,
      upDownTypeCode: req.query.upDownTypeCode as upDownTypeCodeType,
      ...req.query,
    });
    res.send(data);
  }),
];

/* ----------------  ---------------- */
