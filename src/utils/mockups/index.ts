import * as fs from "fs";
import path from "path";

export const getStationResponseList = (): {
  subwayRouteName: string;
  subwayStationId: string;
  subwayStationName: string;
}[] => {
  const jsonFile = fs.readFileSync(
    path.resolve(__dirname, "stationResponseList.json"),
    "utf8"
  );
  const { stationResponseList } = JSON.parse(jsonFile);
  return stationResponseList;
};

export const getTransferedStationList = (): {
  역이름: string;
  stationList: {
    subwayRouteName: string;
    subwayStationId: string;
    subwayStationName: string;
  }[];
}[] => {
  const jsonFile = fs.readFileSync(
    path.resolve(__dirname, "transferedStationList.json"),
    "utf8"
  );
  const { transferedStationList } = JSON.parse(jsonFile);
  return transferedStationList;
};
