import { Controller, FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PhForm";
import PhInput from "../../../components/form/PhInput";
import { Button, Col, Divider, Form, Input, Row } from "antd";
import PhSelect from "../../../components/form/PhSelect";
import {
  bloodGroupOptions,
  genderOptions,
} from "../AcademicManagement/const/global";
import PhDatePicker from "../../../components/form/phDatePicker";
import {
  useGetAcademicDepartmentsQuery,
  useGetAllSemesterQuery,
} from "../../../redux/features/admin/academicManagement.api";
import { useAddStudentMutation } from "../../../redux/features/admin/userManagement.api";
import { toast } from "sonner";


const studentDumyData = {
  password: "alamshuvo1",
  student: {
    name: {
      firstName: "Iftakhar",
      middleName: "A",
      lastName: "Doe",
    },
    gender: "male",
    dateOfBirth: "2000-01-01",
    email: "iftakharalamshuvo111@gmail.com",
    contactNo: "+1234567890",
    emergencyNo: "+0987654321",
    bloogGroup: "O+",
    presentAdress: "123 Main St, Springfield",
    permanentAdress: "456 Elm St, Springfield",
    guardian: {
      fatherName: "Robert Doe",
      fatherOccupation: "Engineer",
      fatherContactNo: "+1234567899",
      motherName: "Jane Doe",
      motherOccupation: "Teacher",
      motherContactNo: "+1234567888",
    },
    localGuardian: {
      name: "Michael Smith",
      occupation: "Accountant",
      contactNo: "+1234567877",
      address: "789 Maple St, Springfield",
    },
    admissionSemester: "676eba871a17cbc19cfdff6e",
    academicDepertment: "6770d7628b1fc26f1d99f7ed",
    profileImg: "http://example.com/images/profile.jpg",
  },
};

//! For develepoment purpose
//! should be removed
const studentDefaultValues = {
  name: {
    firstName: "Iftakhar",
    middleName: "A",
    lastName: "Doe",
  },
  gender: "male",
  email: "iftakharalamshuvo1112@gmail.com",
  contactNo: "+1234567890",
  emergencyNo: "+0987654321",
  bloogGroup: "O+",
  presentAdress: "123 Main St, Springfield",
  permanentAdress: "456 Elm St, Springfield",
  guardian: {
    fatherName: "Robert Doe",
    fatherOccupation: "Engineer",
    fatherContactNo: "+1234567899",
    motherName: "Jane Doe",
    motherOccupation: "Teacher",
    motherContactNo: "+1234567888",
  },
  localGuardian: {
    name: "Michael Smith",
    occupation: "Accountant",
    contactNo: "+1234567877",
    address: "789 Maple St, Springfield",
  },
    admissionSemester: "676eba871a17cbc19cfdff6e",
    academicDepertment: "6770d7628b1fc26f1d99f7ed",
  profileImg: "http://example.com/images/profile.jpg",
};
// const CreateStudent = () => {

//  const [addStudent,{data,error}] = useAddStudentMutation()
//  console.log(error);
//   const { data: sData, isLoading: sIsLoading } =
//     useGetAllSemesterQuery(undefined);

//   const { data: dData, isLoading: DIsloading } =
//     useGetAcademicDepartmentsQuery(undefined,{
//         skip:sIsLoading
//     });



//   const semesterOptions = sData?.data.map((semester) => ({
//     value: semester._id,
//     label: `${semester.name} ${semester.year}`,
//   }));
//   const departmentOptions = dData?.data?.map((item) => ({
//     value: item._id,
//     label: item.name,
//   }));

//   const onsubmit: SubmitHandler<FieldValues> = (data: any) => {
//     const studentData = {
//         password:"student123",
//         student:data,
//     }
//     console.log(data);
//     const formData = new FormData();

//     formData.append("data", JSON.stringify(studentData));
//     formData.append('file', data.Img);
//     addStudent(formData);
//     //! This is for development
//     //! just for checking
//     console.log(Object.fromEntries(formData));
//   };
//   return (
    // <Row>
    //   <Col span={24}>
    //     <PHForm onSubmit={onsubmit} defaultValues={studentDefaultValues}>
    //       <Divider>Personal Info</Divider>
    //       <Row gutter={8}>
    //         <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
    //           <PhInput
    //             type="text"
    //             id="name"
    //             name="name.firstName"
    //             label="First Name"
    //           ></PhInput>
    //         </Col>
    //         <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
    //           <PhInput
    //             type="text"
    //             id="name"
    //             name="name.middleName"
    //             label="Middle Name"
    //           ></PhInput>
    //         </Col>
    //         <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
    //           <PhInput
    //             type="text"
    //             id="name"
    //             name="name.lastName"
    //             label="Last Name"
    //           ></PhInput>
    //         </Col>

    //         <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
    //           <PhSelect
    //             options={genderOptions}
    //             name="gender"
    //             label="Gender"
    //           ></PhSelect>
    //         </Col>
    //         <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
    //           <PhDatePicker
    //             name="datepicker"
    //             label="Date Picker"
    //           ></PhDatePicker>
    //         </Col>
    //         <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
    //           <PhSelect
    //             options={bloodGroupOptions}
    //             name="bloogGroup"
    //             label="Blood Group"
    //           ></PhSelect>
    //         </Col>
    //         <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
    //           <Controller
    //             name="image"
    //             render={({ field: { onChange, value, ...field } }) => (
    //               <Form.Item label="Picture">
    //                 <Input
    //                   type="file"
    //                   value={value?.fileName}
    //                   {...field}
    //                   onChange={(e) => onChange(e.target.files?.[0])}
    //                 />
    //               </Form.Item>
    //             )}
    //           />
    //         </Col>
    //       </Row>
    //       <Divider>Contact Info</Divider>
    //       <Row gutter={8}>
    //         <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
    //           <PhInput
    //             type="text"
    //             id="email"
    //             name="email"
    //             label="Email"
    //           ></PhInput>
    //         </Col>
    //         <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
    //           <PhInput
    //             type="text"
    //             id="contact"
    //             name="contactNo"
    //             label="Contact"
    //           ></PhInput>
    //         </Col>
    //         <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
    //           <PhInput
    //             type="text"
    //             id="emergencyContact"
    //             name="emergencyNo"
    //             label="Emergency Contact"
    //           ></PhInput>
    //         </Col>
    //         <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
    //           <PhInput
    //             type="text"
    //             id="paresentAdress"
    //             name="presentAdress"
    //             label="Present Adress"
    //           ></PhInput>
    //         </Col>
    //         <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
    //           <PhInput
    //             type="text"
    //             id="permanentAdress"
    //             name="permanentAdress"
    //             label="Permanent Adress"
    //           ></PhInput>
    //         </Col>
    //       </Row>
    //       <Divider>Guardian</Divider>
    //       <Row gutter={8}>
    //         <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
    //           <PhInput
    //             type="text"
    //             id="fatherName"
    //             name="guardian.fatherName"
    //             label="Father name"
    //           ></PhInput>
    //         </Col>
    //         <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
    //           <PhInput
    //             type="text"
    //             id="fatherOccupation"
    //             name="guardian.fatherOccupation"
    //             label="Father Occupation"
    //           ></PhInput>
    //         </Col>
    //         <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
    //           <PhInput
    //             type="text"
    //             id="fatherContactNo"
    //             name="guardian.fatherContactNo"
    //             label="Father Contact No"
    //           ></PhInput>
    //         </Col>
    //         <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
    //           <PhInput
    //             type="text"
    //             id="motherName"
    //             name="guardian.motherName"
    //             label="Mother Name"
    //           ></PhInput>
    //         </Col>
    //         <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
    //           <PhInput
    //             type="text"
    //             id="motherOccupation"
    //             name="guardian.motherOccupation"
    //             label="Mother Occupation"
    //           ></PhInput>
    //         </Col>
    //         <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
    //           <PhInput
    //             type="text"
    //             id="motherContactNo"
    //             name="guardian.motherContactNo"
    //             label="Mother Contact No"
    //           ></PhInput>
    //         </Col>
    //       </Row>
    //       <Divider>local Guardian</Divider>
    //       <Row gutter={8}>
    //         <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
    //           <PhInput
    //             type="text"
    //             id="localGuardianName"
    //             name="localGuardian.name"
    //             label="Name"
    //           ></PhInput>
    //         </Col>
    //         <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
    //           <PhInput
    //             type="text"
    //             id="localGuardianOccupation"
    //             name="localGuardian.occupation"
    //             label="Occupation"
    //           ></PhInput>
    //         </Col>
    //         <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
    //           <PhInput
    //             type="text"
    //             id="localGuardianContactNo"
    //             name="localGuardian.contactNo"
    //             label="Contact No"
    //           ></PhInput>
    //         </Col>
    //         <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
    //           <PhInput
    //             type="text"
    //             id="localGuardianAdress"
    //             name="localGuardian.address"
    //             label="Adress"
    //           ></PhInput>
    //         </Col>
    //       </Row>
    //       <Divider>Academic Info</Divider>
    //       <Row gutter={8}>
    //         <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
    //           <PhSelect
    //             options={semesterOptions}
    //             disabled={sIsLoading}
    //             name="admissionSemester"
    //             label="Admission Semester"
    //           />
    //         </Col>

    //         <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
    //           <PhSelect
    //           options={departmentOptions}
    //             name="academicDepertment"
    //             label="Admission Depertment"
    //           />
    //         </Col>
    //       </Row>
    //       <Button htmlType="submit">Submit</Button>
    //     </PHForm>
    //   </Col>
    // </Row>
//   );
// };
const CreateStudent = () => {
  const [addStudent, { data, error }] = useAddStudentMutation();

  console.log({ data, error });

  const { data: sData, isLoading: sIsLoading } =
    useGetAllSemesterQuery(undefined);

  const { data: dData, isLoading: dIsLoading } =
    useGetAcademicDepartmentsQuery(undefined);

  interface Semester {
    _id: string;
    name: string;
    year: string;
  }

  const semesterOptions = sData?.data?.map((item: Semester) => ({
    value: item._id,
    label: `${item.name} ${item.year}`,
  }));

  const departmentOptions = dData?.data?.map((item) => ({
    value: item._id,
    label: item.name,
  }));

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const studentData = {
      password: 'student123',
      student: data,
    };

    const formData = new FormData();

    formData.append('data', JSON.stringify(studentData));
    formData.append('file', data.image);

    addStudent(formData);
    toast.success("student Created sucessfully")
    //! This is for development
    //! Just for checking
    console.log(Object.fromEntries(formData));
  };

  return (
    <Row>
    <Col span={24}>
      <PHForm onSubmit={onSubmit} defaultValues={studentDefaultValues}>
        <Divider>Personal Info</Divider>
        <Row gutter={8}>
          <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
            <PhInput
              type="text"
              id="name"
              name="name.firstName"
              label="First Name"
            ></PhInput>
          </Col>
          <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
            <PhInput
              type="text"
              id="name"
              name="name.middleName"
              label="Middle Name"
            ></PhInput>
          </Col>
          <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
            <PhInput
              type="text"
              id="name"
              name="name.lastName"
              label="Last Name"
            ></PhInput>
          </Col>

          <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
            <PhSelect
              options={genderOptions}
              name="gender"
              label="Gender"
            ></PhSelect>
          </Col>
          <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
            <PhDatePicker
              name="datepicker"
              label="Date Picker"
            ></PhDatePicker>
          </Col>
          <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
            <PhSelect
              options={bloodGroupOptions}
              name="bloogGroup"
              label="Blood Group"
            ></PhSelect>
          </Col>
          <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
            <Controller
              name="image"
              render={({ field: { onChange, value, ...field } }) => (
                <Form.Item label="Picture">
                  <Input
                    type="file"
                    value={value?.fileName}
                    {...field}
                    onChange={(e) => onChange(e.target.files?.[0])}
                  />
                </Form.Item>
              )}
            />
          </Col>
        </Row>
        <Divider>Contact Info</Divider>
        <Row gutter={8}>
          <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
            <PhInput
              type="text"
              id="email"
              name="email"
              label="Email"
            ></PhInput>
          </Col>
          <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
            <PhInput
              type="text"
              id="contact"
              name="contactNo"
              label="Contact"
            ></PhInput>
          </Col>
          <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
            <PhInput
              type="text"
              id="emergencyContact"
              name="emergencyNo"
              label="Emergency Contact"
            ></PhInput>
          </Col>
          <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
            <PhInput
              type="text"
              id="paresentAdress"
              name="presentAdress"
              label="Present Adress"
            ></PhInput>
          </Col>
          <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
            <PhInput
              type="text"
              id="permanentAdress"
              name="permanentAdress"
              label="Permanent Adress"
            ></PhInput>
          </Col>
        </Row>
        <Divider>Guardian</Divider>
        <Row gutter={8}>
          <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
            <PhInput
              type="text"
              id="fatherName"
              name="guardian.fatherName"
              label="Father name"
            ></PhInput>
          </Col>
          <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
            <PhInput
              type="text"
              id="fatherOccupation"
              name="guardian.fatherOccupation"
              label="Father Occupation"
            ></PhInput>
          </Col>
          <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
            <PhInput
              type="text"
              id="fatherContactNo"
              name="guardian.fatherContactNo"
              label="Father Contact No"
            ></PhInput>
          </Col>
          <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
            <PhInput
              type="text"
              id="motherName"
              name="guardian.motherName"
              label="Mother Name"
            ></PhInput>
          </Col>
          <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
            <PhInput
              type="text"
              id="motherOccupation"
              name="guardian.motherOccupation"
              label="Mother Occupation"
            ></PhInput>
          </Col>
          <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
            <PhInput
              type="text"
              id="motherContactNo"
              name="guardian.motherContactNo"
              label="Mother Contact No"
            ></PhInput>
          </Col>
        </Row>
        <Divider>local Guardian</Divider>
        <Row gutter={8}>
          <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
            <PhInput
              type="text"
              id="localGuardianName"
              name="localGuardian.name"
              label="Name"
            ></PhInput>
          </Col>
          <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
            <PhInput
              type="text"
              id="localGuardianOccupation"
              name="localGuardian.occupation"
              label="Occupation"
            ></PhInput>
          </Col>
          <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
            <PhInput
              type="text"
              id="localGuardianContactNo"
              name="localGuardian.contactNo"
              label="Contact No"
            ></PhInput>
          </Col>
          <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
            <PhInput
              type="text"
              id="localGuardianAdress"
              name="localGuardian.address"
              label="Adress"
            ></PhInput>
          </Col>
        </Row>
        <Divider>Academic Info</Divider>
        <Row gutter={8}>
          <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
            <PhSelect
              options={semesterOptions}
              disabled={sIsLoading}
              name="admissionSemester"
              label="Admission Semester"
            />
          </Col>

          <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
            <PhSelect
            options={departmentOptions}
            disabled={dIsLoading}
              name="academicDepertment"
              label="Admission Depertment"
            />
          </Col>
        </Row>
        <Button htmlType="submit">Submit</Button>
      </PHForm>
    </Col>
  </Row>
  );
};





export default CreateStudent;
