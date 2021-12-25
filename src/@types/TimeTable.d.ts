import {
  DailyTypeCodeType,
  UpDownTypeCodeType,
  상하행구분_타입,
  요일구분_타입,
} from "../utils";

declare module "@types" {
  interface I시간표 {
    출발시간: string;
    도착시간: string;
    종점역_ID: string;
    종점역_이름: string;
    요일구분: 요일구분_타입;
    상하행구분: 상하행구분_타입;
  }

  interface TimeTableParams extends DataAPISearchParams {
    subwayStationId: string;
    dailyTypeCode: DailyTypeCodeType;
    upDownTypeCode: UpDownTypeCodeType;
  }

  interface TimeTableResponse {
    arrTime: string | number; // 0;
    depTime: string | number; // "052100";
    dailyTypeCode: DailyTypeCodeType; // "01";
    endSubwayStationId: string; // "MTRKR1P157-1";
    endSubwayStationNm: string; // "서동탄";
    subwayRouteId: string; // "MTRS11";
    subwayStationId: string; // "MTRS11133";
    subwayStationNm: string; // "서울역";
    upDownTypeCode: UpDownTypeCodeType; // "D";
  }
}
