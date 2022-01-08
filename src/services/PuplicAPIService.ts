import { DataAPIResponse, StationResponse } from "@types";
import axios from "axios";

const publicAPILink = {
  지하철역조회:
    "http://openapi.tago.go.kr/openapi/service/SubwayInfoService/getKwrdFndSubwaySttnList",
  지하철시간표조회:
    "http://openapi.tago.go.kr/openapi/service/SubwayInfoService/getSubwaySttnAcctoSchdulList",
};

interface IProps {
  url: keyof typeof publicAPILink;
  params: any;
}

export const fetch = async (props: IProps) => {
  const res = await axios({
    url: publicAPILink[props.url],
    params: {
      serviceKey: process.env.DATA_API_KEY_1,
      ...props.params,
    },
  });
  const data = res.data as DataAPIResponse<any>;

  if (data.response.header.resultCode !== "99") return data;

  const res2 = await axios({
    url: publicAPILink[props.url],
    params: {
      serviceKey: process.env.DATA_API_KEY_2,
      ...props.params,
    },
  });

  return res2.data;
};
