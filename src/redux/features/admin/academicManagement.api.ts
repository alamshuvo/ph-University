import { TAcademicSemester, TResoponseRedux } from "../../../types";
import { baseApi } from "../../api/baseApi";

const academicManagement = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSemester: builder.query({
      query: (args) => {
        const params = new URLSearchParams()
        params.append("name",args[0])
        return {
          url: "/academic-semesters",
          method: "GET",
          params:params
        };
      },
      transformErrorResponse: (
        response: TResoponseRedux<TAcademicSemester[]>
      ) => {
        console.log("inside redux", response);
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),

    addAcademicSemester: builder.mutation({
      query: (data) => ({
        url: "/academic-semesters/create-academic-semesters",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetAllSemesterQuery, useAddAcademicSemesterMutation } =
  academicManagement;
