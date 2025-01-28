import { FieldValues, SubmitHandler } from "react-hook-form";
import PhForm from "../../../components/form/PhForm";
import { Button, Col, Flex } from "antd";
import PhSelect from "../../../components/form/PhSelect";
import { nameOptions } from "./const/semesterConst";
import { monthsOptions } from "./const/global";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicSemesterSchema } from "../../../schemas/academicManagement.schema";

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

const currentYear = new Date().getFullYear();
const yearOptions = [0, 1, 2, 3, 4].map((number) => ({
  value: String(currentYear + number),
  label: String(currentYear + number),
}));

const CreateAcademicSemester = () => {
//   const [addAcademicSemester] = useAddAcademicSemesterMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    // const toastId = toast.loading('Creating...');

    // const name = semesterOptions[Number(data?.name) - 1]?.label;

    const semesterData = {
      name,
      code: data.name,
      year: data.year,
      startMonth: data.startMonth,
      endMonth: data.endMonth,
    };

    // try {
    //   const res = (await addAcademicSemester(semesterData)) as TResponse;
    //   console.log(res);
    //   if (res.error) {
    //     toast.error(res.error.data.message, { id: toastId });
    //   } else {
    //     toast.success('Semester created', { id: toastId });
    //   }
    // } catch (err) {
    //   toast.error('Something went wrong', { id: toastId });
    // }
  };

  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PhForm
          onSubmit={onSubmit}
          resolver={zodResolver(academicSemesterSchema)}
        >
          <PhSelect label="Name" name="name" options={nameOptions} />
          <PhSelect label="Year" name="year" options={yearOptions} />
          <PhSelect
            label="Start Month"
            name="startMonth"
            options={monthsOptions}
          />
          <PhSelect label="End Month" name="endMonth" options={monthsOptions} />

          <Button htmlType="submit">Submit</Button>
        </PhForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
