import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { logOut, setUser } from "../features/auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5001/api/v1",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set("authorization", `${token}`);
    }
    return headers;
  },
});
const baseQuearyWithRefreshToken = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result?.error?.status === 401) {
    const refreshResult = await fetch(
      "http://localhost:5001/api/v1/auth/refresh-token",
      {
        method: "POST",
        credentials: "include",
      }
    );
    const data = await refreshResult.json();
    if (data?.data?.accessToken) {
      const user = (api.getState() as RootState).auth.user;
      api.dispatch(
        setUser({
          user,
          token: data.data.accessToken,
        })
      );
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logOut());
    }
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQuearyWithRefreshToken,
  endpoints: () => ({}),
});
