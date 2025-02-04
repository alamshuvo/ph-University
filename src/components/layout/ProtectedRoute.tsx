import { ReactNode } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import {
  logOut,
  useCurentUser,
  useCurrentToken,
} from "../../redux/features/auth/authSlice";
import { Navigate } from "react-router-dom";
import { varifyToken } from "../../utils/verifyToken";
type TProcetedRoute = {
  children: ReactNode;
  role: string | undefined;
};
const ProtectedRoute = ({ children, role }: TProcetedRoute) => {
  const token = useAppSelector(useCurrentToken);
  const dispatch = useAppDispatch();
  let user;
  if (token) {
    user = varifyToken(token);
  }
  if (role !== undefined && role !== user?.role) {
    dispatch(logOut());
    return <Navigate to={"/login"} replace={true}></Navigate>;
  }
  if (!token) {
    return <Navigate to={"/login"} replace={true}></Navigate>;
  }

  return children;
};

export default ProtectedRoute;
