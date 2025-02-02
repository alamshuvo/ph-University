import { FieldValues, SubmitHandler } from "react-hook-form";
import PhForm from "../../../components/form/PhForm";
import { Button, Col, Flex, InputNumber } from "antd";
import PhSelect from "../../../components/form/PhSelect";
import { toast } from "sonner";
import { useGetAllSemesterQuery } from "../../../redux/features/admin/academicManagement.api";
import PhDatePicker from "../../../components/form/phDatePicker";
import PhInput from "../../../components/form/PhInput";
import { useAddRegisterSemesterMutation } from "../../../redux/features/admin/CourseManagement";
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

const SemesterRegestation = () => {
  const [addSemester]= useAddRegisterSemesterMutation()
  const { data: accademicsemester } = useGetAllSemesterQuery(undefined);

  const academicsemesterOptions = accademicsemester?.data.map((item) => ({
    value: item._id,
    label: `${item.name} ${item.year}`,
  }));

  const semesterStatusOptions = [
    { value: "UPCOMING", label: "Upcoming" },
    { value: "ONGOING", label: "Ongoing" },
    { value: "ENDED", label: "Ended" },
  ];
  console.log(accademicsemester);
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Creating...");

 

    const semesterData = {
     ...data,
     minCredit:Number(data.minCredit),
     maxCredit:Number(data.maxCredit)
    };
  console.log(semesterData);

        try {
          const res = (await addSemester(semesterData)) as Tresponse<any>;
          console.log(res);
          if (res.error) {
            toast.error(res.error.data.message, { id: toastId });
          } else {
            toast.success('Semester created', { id: toastId });
          }
        } catch (err) {
          toast.error('Something went wrong', { id: toastId });
        }
  };

  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PhForm
          onSubmit={onSubmit}

        >
          <PhSelect
            label="Academic Semester"
            name="academicSemester"
            options={academicsemesterOptions}
          />
          <PhSelect
            label="Status"
            name="status"
            options={semesterStatusOptions}
          />
          <PhDatePicker name="startDate" label="Start Date"></PhDatePicker>
          <PhDatePicker name="endDate" label="End Date"></PhDatePicker>
          <PhInput
            type="text"
            id="minCredit"
            name="minCredit"
            label="Min Credit"
          ></PhInput>
          <PhInput
            type="text"
            id="maxCredit"
            name="maxCredit"
            label="Max Credit"
          ></PhInput>
          

          <Button htmlType="submit">Submit</Button>
        </PhForm>
      </Col>
    </Flex>
  );
};

export default SemesterRegestation;
