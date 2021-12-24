declare module "@types" {
  interface IStation {
    호선: string;
    전철역코드: string;
    전철역영문명: string;
    전철역명: string;
    외부코드: string;
  }

  interface StationParams extends DataAPISearchParams {
    subwayStationName?: string;
  }

  type StationResponse = DataAPIResponse<{
    subwayRouteName: string; // "서울 4호선";
    subwayStationId: string; // "MTRS14426";
    subwayStationName: string; // "서울역";
  }>;
}
