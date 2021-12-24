import { dailyTypeCodeType, upDownTypeCodeType } from "../utils";

declare module "@types" {
  interface I시간표 {
    출발시간: string;
    도착시간: string;
    종점역_ID: string;
    종점역_이름: string;
    요일구분: string;
    상하행구분: string;
  }

  interface TimeTableParams extends DataAPISearchParams {
    subwayStationId: string;
    dailyTypeCode: dailyTypeCodeType;
    upDownTypeCode: upDownTypeCodeType;
  }

  interface TimeTableResponse {
    arrTime: string | number; // 0;
    dailyTypeCode: dailyTypeCodeType; // "01";
    depTime: string | number; // "052100";
    endSubwayStationId: string; // "MTRKR1P157-1";
    endSubwayStationNm: string; // "서동탄";
    subwayRouteId: string; // "MTRS11";
    subwayStationId: string; // "MTRS11133";
    subwayStationNm: string; // "서울역";
    upDownTypeCode: upDownTypeCodeType; // "D";
  }
}
