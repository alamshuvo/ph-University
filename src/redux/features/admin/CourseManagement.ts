import { TSemester } from "../../../types";
import { baseApi } from "../../api/baseApi";

const courseManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllSemesters: builder.query({
          query: (args) => {
            const params = new URLSearchParams()
            if (args) {
              args.forEach(element => {
                params.append(element.name,element.value as string)
              });
            }
            return {
              url: "/semister-registation",
              method: "GET",
              params:params
            };
          },
          transformErrorResponse: (
            response: TResoponseRedux<TSemester[]>
          ) => {
            console.log("inside redux", response);
            return {
              data: response.data,
              meta: response.meta,
            };
          },
        }),
    
        addRegisterSemester: builder.mutation({
          query: (data) => ({
            url: "/semister-registation/create-semester-registation",
            method: "POST",
            body: data,
          }),
        }),
   
    
        
      }),
})

export const {useAddRegisterSemesterMutation,useGetAllSemestersQuery} = courseManagementApi