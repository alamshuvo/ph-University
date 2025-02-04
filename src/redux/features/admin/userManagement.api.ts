
import { TResoponseRedux, TStudent,} from "../../../types";
import { baseApi } from "../../api/baseApi";


const userManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllStudents: builder.query({
          query: (args) => {
            const params = new URLSearchParams()
            if (args) {
              args.forEach(element => {
                params.append(element.name,element.value as string)
              });
            }
            return {
              url: "/students",
              method: "GET",
              params:params
            };
          },
          transformErrorResponse: (
            response: TResoponseRedux<TStudent[]>
          ) => {
            console.log("inside redux", response);
            return {
              data: (response.data),
              meta: response.meta,
            };
          },
        }),

    
        addStudent: builder.mutation({
          query: (data) => ({
            url: "/users/create-student",
            method: "POST",
            body: data,
          }),
        }),
        blockUser:builder.mutation({
          query:({data,id})=>({

            url:`/users/change-status/${id}`,
            method:"POST",
            body:data
          })
        }),
        getAllFaculties: builder.query({
          query: (args) => {
            const params = new URLSearchParams()
            if (args) {
              args.forEach(element => {
                params.append(element.name,element.value as string)
              });
            }
            return {
              url: "/faculty",
              method: "GET",
              params:params
            };
          },
          transformErrorResponse: (
            response: TResoponseRedux<TStudent[]>
          ) => {
            console.log("inside redux", response);
            return {
              data: (response.data),
              meta: response.meta,
            };
          },
        }),
        addFaculties:builder.mutation({
          query:(data)=>({
            url:"/users/create-faculty",
            method:"POST",
            body:data
          })
        })

      })
})

export const {useAddStudentMutation, useGetAllStudentsQuery,useBlockUserMutation,useGetAllFacultiesQuery,useAddFacultiesMutation} = userManagementApi