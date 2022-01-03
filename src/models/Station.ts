import { I전철역 } from "@types";
import mongoose from "mongoose";

export const StationModel = mongoose.model<{
  요일: string;
  전철역_리스트: I전철역[];
}>(
  "Station",
  new mongoose.Schema({
    요일: String,
    전철역_리스트: [
      {
        역이름: { type: String, required: true },
        호선_리스트: [
          {
            전철역_ID: { type: String, required: true },
            호선이름: { type: String, required: true },
            시간표_리스트: [
              {
                출발시간: String,
                도착시간: String,
                종점역_ID: String,
                종점역_이름: String,
                요일구분: String,
                상하행구분: String,
              },
            ],
          },
        ],
      },
    ],
  })
);

// 역하나의 디테일한 정보
// + 역의 시간표

// 역의 실시간 도착 정보
