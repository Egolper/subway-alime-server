import { StationParams, TimeTableParams, TimeTableResponse } from "@types";
import axios from "axios";
import { StationModel } from "../models";

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
  return data;
};

export const getTimeTable = async (params: TimeTableParams) => {
  const { data } = await axios({
    url: "http://openapi.tago.go.kr/openapi/service/SubwayInfoService/getSubwaySttnAcctoSchdulList",
    params: {
      serviceKey: process.env.DATA_API_KEY,
      ...params,
    },
  });
  return data as TimeTableResponse;
};
