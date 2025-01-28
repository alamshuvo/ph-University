import AcademicDepertment from "../pages/admin/AcademicManagement/AcademicDepertment";
import AcademicFaculty from "../pages/admin/AcademicManagement/AcademicFaculty";
import AcademicSemester from "../pages/admin/AcademicManagement/AcademicSemester";
import CreateAcademicDepertment from "../pages/admin/AcademicManagement/CreateAcademicDepertment";
import CreateAcademicFaculty from "../pages/admin/AcademicManagement/CreateAcademicFaculty";
import CreateAcademicSemester from "../pages/admin/AcademicManagement/CreateAcademicSemester";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";

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
        path:"create-academic-semesters",
        element:<CreateAcademicSemester></CreateAcademicSemester>
      },
      {
        name: "Academic Semester ",
        path: "academic-semesters",
        element: <AcademicSemester></AcademicSemester>,
      },
      {
        name:"Create A.Faculty",
        path:"create-academic-faculty",
        element:<CreateAcademicFaculty></CreateAcademicFaculty>
      },
      {
        name: "Academic Faculty",
        path: "academic-faculty",
        element: <AcademicFaculty></AcademicFaculty>
      },
      {
        name:"Create A.Depertment",
        path:"create-academic-depertment",
        element:<CreateAcademicDepertment></CreateAcademicDepertment>
      },
      {
        name: "Academic Depertment",
        path: "academic-depertment",
        element:<AcademicDepertment></AcademicDepertment>
      }
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
    ],
  },
];
