import {
  DataAPIResponse,
  I시간표,
  I전철역,
  I호선,
  StationParams,
  StationResponse,
} from "@types";
import axios from "axios";
import { TimeTableService } from ".";
import { StationModel } from "../models";
import {
  getTodayDailyType,
  subwayRouteMapper,
  upDownTypeCodeList,
} from "../utils";
import { transferTimeTable } from "./TimeTableService";

export const findAll = () => {
  return StationModel.find();
};

export const findStation = ({ name }: { name: string }) => {
  return StationModel.findOne({ name });
};

export const createStation = async () => {
  return new StationModel().save();
};

export const deleteStation = (name: string) => {
  return StationModel.deleteOne({ name });
};

/* ----------------  ---------------- */

export const getStations = async (params: StationParams) => {
  const { data } = await axios({
    url: "http://openapi.tago.go.kr/openapi/service/SubwayInfoService/getKwrdFndSubwaySttnList",
    params: {
      serviceKey: process.env.DATA_API_KEY,
      ...params,
    },
  });
  return data as DataAPIResponse<StationResponse>;
};

/* ----------------  ---------------- */

export const collect호선 = async ({
  subwayStationId,
  subwayRouteName,
}: StationResponse): Promise<I호선> => {
  let 호선이름 = subwayRouteMapper[subwayRouteName];
  let 시간표_리스트: I시간표[] = [];

  const dailyTypeCode = getTodayDailyType();

  for (const upDownTypeCode of upDownTypeCodeList) {
    const { response } = await TimeTableService.getStationTimeTable({
      subwayStationId,
      dailyTypeCode,
      upDownTypeCode,
    });
    if (!response?.body?.items) {
      console.log(response, subwayStationId, dailyTypeCode, upDownTypeCode);
      break;
    }

    const timeTableList = response.body.items.item;
    시간표_리스트 = [...시간표_리스트, ...timeTableList.map(transferTimeTable)];
  }

  return { 전철역_ID: subwayStationId, 호선이름, 시간표_리스트 };
};

export const collect전철역 = async ({
  역이름,
  stationList,
}: {
  역이름: string;
  stationList: StationResponse[];
}): Promise<I전철역> => {
  const 호선_리스트: I호선[] = [];

  for (const station of stationList) {
    const 호선 = await collect호선(station);
    호선_리스트.push(호선);
  }

  return { 역이름, 호선_리스트 };
};

export const collect지하철공공데이터 = async () => {
  console.log(`$$ 지하철 공공데이터 수집 시작`);

  const { response } = await getStations({ numOfRows: 1000 });
  const stationList = response.body.items.item;

  console.log(`$$ 총 ${stationList.length}개의 역 데이터`);

  let 전철역_리스트: I전철역[] = [];

  transferStationList(stationList).map(async (v) => {
    try {
      const 전철역 = await collect전철역(v);
      console.log(`$$ ${v.역이름} 역 완료`);
      전철역_리스트.push(전철역);
    } catch (e) {
      console.log(e);
    }
  });

  console.log(`$$ 총 ${전철역_리스트.length}개의 역 데이터 수집완료`);

  await StationModel.insertMany(전철역_리스트);

  console.log(`$$ DB 저장 완료 ✨`);
};

/* ----------------  ---------------- */

export const transferStationList = (stationList: StationResponse[]) => {
  const db: {
    [key: string]: StationResponse[];
  } = {};

  stationList.forEach((station) => {
    const { subwayStationName } = station;
    if (!db[subwayStationName]) db[subwayStationName] = [];
    db[subwayStationName].push(station);
  });

  return Object.keys(db).map((v) => ({
    역이름: v,
    stationList: db[v],
  }));
};
