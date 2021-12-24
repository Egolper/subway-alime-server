declare module "@types" {
  interface I전철역 {
    역이름: string;
    호선_리스트: I호선[];
  }

  interface I호선 {
    전철역_ID: string;
    호선이름: string;
    시간표_리스트: I시간표[];
  }

  interface StationParams extends DataAPISearchParams {
    subwayStationName?: string;
  }

  type StationResponse = {
    subwayRouteName: string; // "서울 4호선";
    subwayStationId: string; // "MTRS14426";
    subwayStationName: string; // "서울역";
  };
}
