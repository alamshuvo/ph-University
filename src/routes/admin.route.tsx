import AcademicDepertment from "../pages/admin/AcademicManagement/AcademicDepertment";
import AcademicFaculty from "../pages/admin/AcademicManagement/AcademicFaculty";
import AcademicSemester from "../pages/admin/AcademicManagement/AcademicSemester";
import CreateAcademicDepertment from "../pages/admin/AcademicManagement/CreateAcademicDepertment";
import CreateAcademicFaculty from "../pages/admin/AcademicManagement/CreateAcademicFaculty";
import CreateAcademicSemester from "../pages/admin/AcademicManagement/CreateAcademicSemester";
import AdminDashboard from "../pages/admin/AdminDashboard";
import Course from "../pages/admin/courseManagement/Course";
import CreateCourse from "../pages/admin/courseManagement/CreateCourse";
import OfferCourse from "../pages/admin/courseManagement/OfferCourse";
import OfferedCourse from "../pages/admin/courseManagement/OfferedCourse";
import SemesterRegester from "../pages/admin/courseManagement/SemesterRegester";
import CreateAdmin from "../pages/admin/userManagement/CreateAdmin";
import CreateFaculty from "../pages/admin/userManagement/CreateFaculty";
import CreateStudent from "../pages/admin/userManagement/CreateStudent";
import StudentData from "../pages/admin/userManagement/StudentData";
import StudentDetails from "../pages/admin/userManagement/StudentDetails";

export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard></AdminDashboard>,
  },
  {
    name: "Academic Management",
    children: [
      {
        name: "Create A.Semester",
        path: "create-academic-semesters",
        element: <CreateAcademicSemester></CreateAcademicSemester>,
      },
      {
        name: "Academic Semester ",
        path: "academic-semesters",
        element: <AcademicSemester></AcademicSemester>,
      },
      {
        name: "Create A.Faculty",
        path: "create-academic-faculty",
        element: <CreateAcademicFaculty></CreateAcademicFaculty>,
      },
      {
        name: "Academic Faculty",
        path: "academic-faculty",
        element: <AcademicFaculty></AcademicFaculty>,
      },
      {
        name: "Create A.Depertment",
        path: "create-academic-depertment",
        element: <CreateAcademicDepertment></CreateAcademicDepertment>,
      },
      {
        name: "Academic Depertment",
        path: "academic-depertment",
        element: <AcademicDepertment></AcademicDepertment>,
      },
    ],
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin></CreateAdmin>,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <CreateFaculty></CreateFaculty>,
      },
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudent></CreateStudent>,
      },
      {
        name: "Students",
        path: "students-data",
        element: <StudentData></StudentData>,
      },
      {
        path: "student-data/:studetnId",
        element: <StudentDetails></StudentDetails>,
      },
    ],
  },
  {
    name: "Course Management",
    children: [
      {
        name: "Registered Semester",
        path: "registered-semesters",
        element: <SemesterRegester></SemesterRegester>,
      },
      {
        name: "Create Course",
        path: "create-course",
        element: <CreateCourse></CreateCourse>,
      },
      {
        name: "Course",
        path: "courses",
        element: <Course></Course>,
      },
      {
        name:"Offere Course",
        path:"offer-course",
        element:<OfferCourse></OfferCourse>
      },
      {
        name:"Offered Course",
        path:"offered-course",
        element:<OfferedCourse></OfferedCourse>
      }
    ],
  },
];
