import { IStation } from "@types";
import mongoose from "mongoose";

export const StationModel = mongoose.model<IStation>(
  "Station",
  new mongoose.Schema({})
);
