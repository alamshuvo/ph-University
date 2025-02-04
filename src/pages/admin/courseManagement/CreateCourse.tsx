import { FieldValues, SubmitHandler } from "react-hook-form";
import PhForm from "../../../components/form/PhForm";
import { Button, Col, Flex } from "antd";
import PhSelect from "../../../components/form/PhSelect";
import { toast } from "sonner";

import PhInput from "../../../components/form/PhInput";
import {
  useAddCourseMutation,
  useGetAllCoursesQuery,
} from "../../../redux/features/admin/CourseManagement";
import { Tresponse } from "../../../types";

// const curentYear = new Date().getFullYear();
// const yearOptions = [0, 1, 2, 3, 4].map((i) => ({
//   value: String(curentYear + i),
//   label: String(curentYear + i),
// }));

// const CreateAcademicSemester = () => {
//   const onsubmit: SubmitHandler<FieldValues> = (data) => {
//     const name = nameOptions[Number(data.name) - 1].label;
//     const code = data.name;
//     const semesterData = {
//       name,
//       code,
//       year: data.year,
//       startMonth: data.startMonth,
//       endMonth: data.endMonth,
//     };
//     console.log(semesterData);
//   };

//   return (
//     <Flex justify="center" align="center">
//       <Col span={6}>
//         <PhForm
//           onSubmit={onsubmit}
//           resolver={zodResolver(academicSemesterSchema)}
//         >
//           <PhSelect label="Name" name="name" options={nameOptions} />
//           <PhSelect label="Year" name="year" options={yearOptions} />
//           <PhSelect
//             label="Start Month"
//             name="startMonth"
//             options={monthsOptions}
//           />
//           <PhSelect label="End Month" name="endMonth" options={monthsOptions} />
//           <Button htmlType="submit">Submit</Button>
//         </PhForm>
//       </Col>
//     </Flex>
//   );
// };

// export default CreateAcademicSemester;

// import { FieldValues, SubmitHandler } from 'react-hook-form';
// import PHForm from '../../../components/form/PHForm';
// import { Button, Col, Flex } from 'antd';
// import PHSelect from '../../../components/form/PHSelect';
// import { semesterOptions } from '../../../constants/semester';
// import { monthOptions } from '../../../constants/global';
// import { zodResolver } from '@hookform/resolvers/zod';

// import { academicSemesterSchema } from '../../../schemas/academicManagement.schema';
// import { useAddAcademicSemesterMutation } from '../../../redux/features/admin/academicManagement.api';
// import { toast } from 'sonner';
// import { TResponse } from '../../../types/global';

const CreateCourse = () => {
  const [createCourse] = useAddCourseMutation();
  const { data: courses } = useGetAllCoursesQuery(undefined);
  console.log(courses);

  const prerequisiteCoursesOptions = courses?.data.map((item) => ({
    value: item._id,
    label: item.title,
  }));

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Creating...");

    const courseData = {
      ...data,
      code:Number(data.code),
      credits:Number(data.credits),
      isDeleted: false,
      preRequisiteCourses: data.preRequisiteCourses ? data.preRequisiteCourses.map((item) => ({
        course: item,
        isDeleted: false,
      })):[]
    };
    console.log(courseData);

    try {
      const res = (await createCourse(courseData)) as Tresponse<any>;
      console.log(res);
      if (res.error) {
        toast.error(res.error.data.message, { id: toastId });
      } else {
        toast.success("Course created", { id: toastId });
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong", { id: toastId });
    }
  };

  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PhForm onSubmit={onSubmit}>
          <PhInput type="text" id="title" name="title" label="Title"></PhInput>
          <PhInput
            type="text"
            id="prefix"
            name="prefix"
            label="Prefix"
          ></PhInput>
          <PhInput type="text" id="code" name="code" label="Code"></PhInput>
          <PhInput
            type="text"
            id="credits"
            name="credits"
            label="Credits"
          ></PhInput>
          <PhSelect
            mode="multiple"
            name="preRequisiteCourses"
            label="preRequisiteCourses"
            options={prerequisiteCoursesOptions}
          ></PhSelect>

          <Button htmlType="submit">Submit</Button>
        </PhForm>
      </Col>
    </Flex>
  );
};

export default CreateCourse;
