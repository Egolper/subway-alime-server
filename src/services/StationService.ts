import { TimeTableParams } from "@types";
import axios from "axios";
import { generateError } from "../middlewares";
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

export const getTimeTable = async (params: TimeTableParams) => {
  const { data } = await axios({
    url: "http://openapi.tago.go.kr/openapi/service/SubwayInfoService/getSubwaySttnAcctoSchdulList",
    params: {
      serviceKey: process.env.TIMETABLE_API_KEY,
      ...params,
    },
  });
  console.log(data);
  return data;
};
