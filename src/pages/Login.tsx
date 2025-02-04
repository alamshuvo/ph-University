import { Button, Row } from "antd";
import { FieldValues, useForm, useFormContext } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hook";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { varifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PhForm from "../components/form/PhForm";
import PhInput from "../components/form/PhInput";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  // const { register, handleSubmit } = useForm({
  //   defaultValues: {
  //     id: "2026030003",
  //     password: "alamshuvozeny123",
  //   },
  // });
const defaultValues ={
  id: "2026030003",
  password: "alamshuvozeny123",
}

  const [login] = useLoginMutation();

  const onsubmit = async (data: FieldValues) => {
    console.log(data);
    const toastId = toast.loading("Logging in");
    try {
      const userInfo = {
        id: data.id,
        password: data.password,
      };
      const res = await login(userInfo).unwrap();

      const user = varifyToken(res.data.accessToken) as TUser;
      const token = res.data.accessToken;
      dispatch(setUser({ user: user, token }));
      toast.success("loged in sucessflly", { id: toastId, duration: 2000 });
    if (res?.data?.needsPasswordChange) {
      navigate(`/change-password`);
    }else{
      navigate(`/${user.role}/dashboard`);
    }
   
    } catch (error) {
      toast.error("something went wrong", { id: toastId, duration: 2000 });
    }
  };
  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <PhForm onSubmit={onsubmit} defaultValues={defaultValues}>
        <PhInput type="text" id="id" name="id" label="Id:" />
        <PhInput type="text" id="password" name="password" label="Password" />
        <Button htmlType="submit">Login</Button>
      </PhForm>
    </Row>
  );
};

export default Login;
