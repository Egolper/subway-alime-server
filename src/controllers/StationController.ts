import { RequestHandler } from "express";
import { asyncErrorCatcher, validatorErrorChecker } from "../middlewares";
import { StationService } from "../services";

/* ----------------  ---------------- */

export const findStations: RequestHandler[] = [
  validatorErrorChecker,
  asyncErrorCatcher(async (req, res) => {
    const name = req.query.name as string | undefined;

    if (name) {
      const data = await StationService.findStation({ name });
      res.send(data);
      return;
    }

    const data = await StationService.findAll();
    res.send(data);
  }),
];

/* ----------------  ---------------- */
