import { BaseQueryApi } from "@reduxjs/toolkit/query";

type TError = {
  data: {
    message: string;
    stack: string;
    sucess: boolean;
  };
  status: number;
};
export type TMeta = {
  limit: number;
  page: number;
  total: number;
  totalPage: number;
};
export type Tresponse = {
  data?: any;
  error?: TError;
  meta?:TMeta,
  sucess:boolean,
  message:string
};

export type TResoponseRedux = Tresponse & BaseQueryApi