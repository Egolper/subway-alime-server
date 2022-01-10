/* ----------------  ---------------- */

export const upDownTypeCodeList = ["U", "D"] as const;
export type UpDownTypeCodeType = typeof upDownTypeCodeList[number];

export const 상하행구분_리스트 = ["상행", "하행"] as const;
export type 상하행구분_타입 = typeof 상하행구분_리스트[number];

export const upDownTypeMapper: Record<UpDownTypeCodeType, 상하행구분_타입> = {
  U: "상행",
  D: "하행",
};

/* ----------------  ---------------- */

export const dailyTypeCodeList = ["01", "02", "03"] as const;
export type DailyTypeCodeType = typeof dailyTypeCodeList[number];

export const 요일구분_리스트 = ["평일", "토요일", "일요일"] as const;
export type 요일구분_타입 = typeof 요일구분_리스트[number];

export const dailyTypeMapper: Record<DailyTypeCodeType, 요일구분_타입> = {
  "01": "평일",
  "02": "토요일",
  "03": "일요일",
};

/* ----------------  ---------------- */

/**
 *  공공데이터API의 호선명과 호환
 *
 *  서해, 김포골드 없음...
 */
export const subwayRouteMapper: {
  [key: string]: string;
} = {
  인천1호선: "인천 1",
  인천2호선: "인천 2",
  수인분당: "수인분당",
  경춘: "경춘",
  경의중앙: "경의중앙",
  경강: "경강",
  동해: "동해",
  우이신설: "우이신설",
  의정부: "의정부",
  에버라인: "에버라인",
  신분당: "신분당",
  공항: "공항철도",
  자기부상: "자기부상",
  "서울 1호선": "1",
  "서울 2호선": "2",
  "서울 3호선": "3",
  "서울 4호선": "4",
  "서울 5호선": "5",
  "서울 6호선": "6",
  "서울 7호선": "7",
  "서울 8호선": "8",
  "서울 9호선": "9",
};
