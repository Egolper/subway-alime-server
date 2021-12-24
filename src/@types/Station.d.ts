declare module "@types" {
  interface IStation {
    전철역명: string;
    호선_리스트: {
      전철역코드: string;
      호선명: string;
      시간표_리스트: I시간표[];
    }[];
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
