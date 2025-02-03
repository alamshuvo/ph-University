import { TResoponseRedux, TSemester } from "../../../types";
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
          providesTags:["semster"],
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
          invalidatesTags:["semster"],
        }),
        updateRegisterSemester: builder.mutation({
            query: (args) => ({
              url: `/semister-registation/${args.id}`,
              method: "PATCH",
              body: args.data,
            }),
            invalidatesTags:["semster"]
          }),
          getAllCourses: builder.query({
            query: (args) => {
              const params = new URLSearchParams()
              if (args) {
                args.forEach(element => {
                  params.append(element.name,element.value as string)
                });
              }
              return {
                url: "/courses",
                method: "GET",
                params:params
              };
            },
            providesTags:["courses"],
            transformErrorResponse: (
              response: TResoponseRedux<any>
            ) => {
              console.log("inside redux", response);
              return {
                data: response.data,
                meta: response.meta,
              };
            },
          }),
          addCourse:builder.mutation({
            query:(data)=>({
              url:`/courses/create-course`,
              method:"POST",
              body:data
            }),
            invalidatesTags:['courses']
          })
   
    
        
      }),
})

export const {useAddRegisterSemesterMutation,useGetAllSemestersQuery,useUpdateRegisterSemesterMutation,useGetAllCoursesQuery,useAddCourseMutation} = courseManagementApi