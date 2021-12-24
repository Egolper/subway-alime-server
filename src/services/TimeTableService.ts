import {
  DataAPIResponse,
  I시간표,
  TimeTableParams,
  TimeTableResponse,
} from "@types";
import axios from "axios";

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

const transerTime = (time: string | number) => {
  const target = time + "";
  if (target.length < 6) return "00:00:00";
  return `${target.substring(0, 2)}:${target.substring(
    2,
    4
  )}:${target.substring(4, 6)}`;
};

export const transferTimeTable = (timeTable: TimeTableResponse): I시간표 => {
  return {
    도착시간: transerTime(timeTable.arrTime),
    출발시간: transerTime(timeTable.depTime),
    요일구분: dailyTypeMapper[timeTable.dailyTypeCode],
    상하행구분: upDownTypeMapper[timeTable.upDownTypeCode],
    종점역_ID: timeTable.endSubwayStationId,
    종점역_이름: timeTable.endSubwayStationNm,
  };
};

const upDownTypeMapper = {
  U: "상행",
  D: "하행",
};

//* 요일구분코드 (01:평일, 02:토요일, 03:일요일)
const dailyTypeMapper = {
  "01": "평일",
  "02": "토요일",
  "03": "일요일",
};
