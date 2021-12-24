import { RequestHandler } from "express";
import { param, query } from "express-validator";
import { asyncErrorCatcher, validatorErrorChecker } from "../middlewares";
import { StationService } from "../services";

/* ----------------  ---------------- */

export const getStations: RequestHandler[] = [
  validatorErrorChecker,
  asyncErrorCatcher(async (req, res) => {
    const data = await StationService.getStations(req.query);
    res.send(data);
  }),
];

/* ----------------  ---------------- */

const dailyTypeCodeList = ["01", "02", "03"] as const;
/**
 * 요일구분코드 (01:평일, 02:토요일, 03:일요일)
 */
export type dailyTypeCodeType = typeof dailyTypeCodeList[number];

const upDownTypeCodeList = ["U", "D"] as const;
/**
 * 상하행구분코드 (U:상행, D:하행)
 */
export type upDownTypeCodeType = typeof upDownTypeCodeList[number];

export const getTimeTable: RequestHandler[] = [
  param("id").notEmpty(),
  query("dailyTypeCode").isIn(dailyTypeCodeList),
  query("upDownTypeCode").isIn(upDownTypeCodeList),
  validatorErrorChecker,
  asyncErrorCatcher(async (req, res) => {
    const data = await StationService.getTimeTable({
      subwayStationId: req.params.id,
      dailyTypeCode: req.query.dailyTypeCode as dailyTypeCodeType,
      upDownTypeCode: req.query.upDownTypeCode as upDownTypeCodeType,
      ...req.query,
    });
    res.send(data);
  }),
];

/* ----------------  ---------------- */
