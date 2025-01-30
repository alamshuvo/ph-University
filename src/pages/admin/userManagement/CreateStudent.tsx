import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PhForm";
import PhInput from "../../../components/form/PhInput";
import { Button, Col, Divider, Row } from "antd";
import PhSelect from "../../../components/form/PhSelect";
import { bloodGroupOptions, genderOptions } from "../AcademicManagement/const/global";
import PhDatePicker from "../../../components/form/phDatePicker";

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
  }
const CreateStudent = () => {
  const onsubmit: SubmitHandler<FieldValues> = (data: any) => {
    console.log(data);
    const formData = new FormData();

    formData.append("data", JSON.stringify(data));
    //! This is for development
    //! just for checking
    console.log(Object.fromEntries(formData));
  };
  return (
    <Row>
      <Col span={24}>
        <PHForm onSubmit={onsubmit} defaultValues={studentDefaultValues}>
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
             <PhSelect options={genderOptions} name="gender" label="Gender"></PhSelect>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhDatePicker name="datepicker" label="Date Picker"></PhDatePicker>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
             <PhSelect options={bloodGroupOptions} name="bloogGroup" label="Blood Group">

             </PhSelect>
            </Col>
          </Row>
          <Row gutter={8}>
          <Divider>Contact Info</Divider>
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

          <Row gutter={8}>
          <Divider>Guardian</Divider>
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

          <Row gutter={8}>
          <Divider>local Guardian</Divider>
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
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Row>
  );
};

export default CreateStudent;
