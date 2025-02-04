import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { adminPaths } from "./admin.route";
import { routeGenerator } from "../utils/routesGenerator";
import ProtectedRoute from "../components/layout/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute role='admin'>
        <App></App>
      </ProtectedRoute>
    ),
    children: routeGenerator(adminPaths),
  },
  {
    path: "/faculty",
    element: <ProtectedRoute role='faculty'><App></App></ProtectedRoute>,
    children: routeGenerator(adminPaths),
  },
  {
    path: "/student",
    element:<ProtectedRoute role='student'><App></App></ProtectedRoute>,
    children: routeGenerator(adminPaths),
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/registation",
    element: <Register></Register>,
  },
]);

export default router;
