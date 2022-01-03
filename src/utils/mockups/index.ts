import * as fs from "fs";
import path from "path";

export const getStationResponseList = () => {
  const jsonFile = fs.readFileSync(
    path.resolve(__dirname, "stationResponseList.json"),
    "utf8"
  );
  const { stationResponseList } = JSON.parse(jsonFile);
  return stationResponseList;
};

export const getTransferedStationList = () => {
  const jsonFile = fs.readFileSync(
    path.resolve(__dirname, "transferedStationList.json"),
    "utf8"
  );
  const { transferedStationList } = JSON.parse(jsonFile);
  return transferedStationList;
};
