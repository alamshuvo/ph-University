import { baseApi } from "../../api/baseApi";

const userManagementApi = baseApi.injectEndpoints({
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
    
        addStudent: builder.mutation({
          query: (data) => ({
            url: "/users/create-student",
            method: "POST",
            body: data,
          }),
        }),
      })
})

export const {useAddStudentMutation } = userManagementApi