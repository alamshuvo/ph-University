import { baseApi } from "../../api/baseApi";

const courseManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // getAllSemester: builder.query({
        //   query: (args) => {
        //     const params = new URLSearchParams()
        //     if (args) {
        //       args.forEach(element => {
        //         params.append(element.name,element.value as string)
        //       });
        //     }
        //     return {
        //       url: "/academic-semesters",
        //       method: "GET",
        //       params:params
        //     };
        //   },
        //   transformErrorResponse: (
        //     response: TResoponseRedux<TAcademicSemester[]>
        //   ) => {
        //     console.log("inside redux", response);
        //     return {
        //       data: response.data,
        //       meta: response.meta,
        //     };
        //   },
        // }),
    
        addRegisterSemester: builder.mutation({
          query: (data) => ({
            url: "/semister-registation/create-semester-registation",
            method: "POST",
            body: data,
          }),
        }),
   
    
        
      }),
})

export const {useAddRegisterSemesterMutation} = courseManagementApi