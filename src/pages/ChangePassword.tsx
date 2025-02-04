import { Button, Row } from "antd";
import PhInput from "../components/form/PhInput";

import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../components/form/PhForm";
import { useAddChangePasswordMutation } from "../redux/features/admin/userManagement.api";
import {  useNavigate } from "react-router-dom";
import { useAppDispatch } from "../redux/hook";
import { logOut } from "../redux/features/auth/authSlice";
import { toast } from "sonner";

const ChangePassword = () => {
  const [ChangePassword] = useAddChangePasswordMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate()
  const onsubmit: SubmitHandler<FieldValues> = async (data) => {
    const res = await ChangePassword(data);
    if (res?.data?.sucess) {
      dispatch(logOut());
      return navigate("/login");
    } else {
      toast.error(res?.data?.error.message);
    }
  };
  return (
    <Row justify={"center"} align={"middle"} style={{height:"100vh"}}>
      <PHForm onSubmit={onsubmit}>
        <PhInput
          type="text"
          id="oldPassword"
          name="oldPassword"
          label="Old Password"
        />
        <PhInput
          type="text"
          id="newPassword"
          name="newPassword"
          label="New Password"
        />
        <Button htmlType="submit">Login</Button>
      </PHForm>
    </Row>
  );
};

export default ChangePassword;
