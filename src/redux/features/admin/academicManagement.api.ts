import { TAcademicDepartment, TAcademicFaculty, TAcademicSemester, TResoponseRedux } from "../../../types";
import { baseApi } from "../../api/baseApi";

const academicManagement = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSemester: builder.query({
      query: (args) => {
        const params = new URLSearchParams()
        if (args) {
          args.forEach(element => {
            params.append(element.name,element.value as string)
          });
        }
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
    getAcademicFaculties: builder.query({
      query: () => {
        return { url: '/academic-faculties', method: 'GET' };
      },
      transformResponse: (response: TResoponseRedux<TAcademicFaculty[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    addAcademicFaculty : builder.mutation({
      query: (data) => ({
        url: '/academic-faculties/create-academic-faculty',
        method: 'POST',
        body: data,
      }),
    }),
   getAcademicDepartments:builder.query({
    query:()=>{
      return {url:'/academic-departments',method:'GET'}
    },
    transformResponse:(response:TResoponseRedux<TAcademicDepartment[]>)=>{
      return {
        data:response.data,
        meta:response.meta
      }
    } 
   }),

   addAcademicDepertment : builder.mutation({
    query:(data)=>({
      url:'/academic-departments/create-academic-department',
      method:'POST',
      body:data
    })
   })


    
  }),


});

export const { useGetAllSemesterQuery, useAddAcademicSemesterMutation,useGetAcademicDepartmentsQuery,useGetAcademicFacultiesQuery, } =
  academicManagement;
