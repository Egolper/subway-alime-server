import moment from "moment-timezone";
import { DailyTypeCodeType } from "./TypeMapper";

export const getTodayDailyType = (): DailyTypeCodeType => {
  const day = moment.tz("Asia/Seoul").day();

  if (day === 0) return "03";
  else if (day === 6) return "02";
  return "01";
};
