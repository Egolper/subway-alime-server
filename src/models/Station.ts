import { IStation } from "@types";
import mongoose from "mongoose";

export const StationModel = mongoose.model<IStation>(
  "Station",
  new mongoose.Schema({
    
  })
);


// 역하나의 디테일한 정보
// + 역의 시간표

// 역의 실시간 도착 정보