import {
  dailyTypeCodeType,
  upDownTypeCodeType,
} from "../controllers/StationController";

declare module "@types" {
  interface TimeTableParams extends DataAPISearchParams {
    subwayStationId: string;
    dailyTypeCode: dailyTypeCodeType;
    upDownTypeCode: upDownTypeCodeType;
  }

  type TimeTableResponse = DataAPIResponse<{
    arrTime: string | number; // 0;
    dailyTypeCode: string; // "01";
    depTime: string | number; // "052100";
    endSubwayStationId: string; // "MTRKR1P157-1";
    endSubwayStationNm: string; // "서동탄";
    subwayRouteId: string; // "MTRS11";
    subwayStationId: string; // "MTRS11133";
    subwayStationNm: string; // "서울역";
    upDownTypeCode: upDownTypeCodeType; // "D";
  }>;
}
