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
