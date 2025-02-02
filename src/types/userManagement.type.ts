export interface Root {
    password: string
    student: TStudent
  }
  
  export type TStudent= {
    name: TName
    gender: string
    dateOfBirth: string
    email: string
    contactNo: string
    emergencyNo: string
    bloogGroup: string
    presentAdress: string
    permanentAdress: string
    guardian: TGuardian
    localGuardian: TLocalGuardian
    admissionSemester: string
    academicDepertment: string
    profileImg: string
  }
  
  export type TName ={
    firstName: string
    middleName: string
    lastName: string
  }
  
  export type  TGuardian= {
    fatherName: string
    fatherOccupation: string
    fatherContactNo: string
    motherName: string
    motherOccupation: string
    motherContactNo: string
  }
  
  export type TLocalGuardian ={
    name: string
    occupation: string
    contactNo: string
    address: string
  }
  