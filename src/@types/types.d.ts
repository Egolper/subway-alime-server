declare module "@types" {
  interface DataAPISearchParams {
    numOfRows?: number;
    pageNo?: number;
    totalCount?: number;
  }

  interface DataAPIResponse<T> {
    response: {
      header: {
        resultCode: string; // "00";
        resultMsg: string; // "NORMAL SERVICE.";
      };
      body: {
        items: {
          item: T[];
        } & DataAPISearchParams;
      };
    };
  }
}
