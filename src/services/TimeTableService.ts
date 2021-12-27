import {
  DataAPIResponse,
  I시간표,
  TimeTableParams,
  TimeTableResponse,
} from "@types";
import axios from "axios";
import { dailyTypeMapper, upDownTypeMapper } from "../utils";

export const getStationTimeTable = async (params: TimeTableParams) => {
  const { data } = await axios({
    url: "http://openapi.tago.go.kr/openapi/service/SubwayInfoService/getSubwaySttnAcctoSchdulList",
    params: {
      serviceKey: process.env.DATA_API_KEY,
      ...params,
    },
  });
  return data as DataAPIResponse<TimeTableResponse>;
};

/* ----------------  ---------------- */

const transferTime = (time: string | number) => {
  const target = time + "";
  if (target.length < 6) return "00:00:00";
  const HH = target.substring(0, 2);
  const MM = target.substring(2, 4);
  const SS = target.substring(4, 6);

  return `${HH}:${MM}:${SS}`;
};

export const transferTimeTable = (timeTable: TimeTableResponse): I시간표 => {
  return {
    도착시간: transferTime(timeTable.arrTime),
    출발시간: transferTime(timeTable.depTime),
    요일구분: dailyTypeMapper[timeTable.dailyTypeCode],
    상하행구분: upDownTypeMapper[timeTable.upDownTypeCode],
    종점역_ID: timeTable.endSubwayStationId,
    종점역_이름: timeTable.endSubwayStationNm,
  };
};
