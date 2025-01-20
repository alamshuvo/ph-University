import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hook";
import { setUser } from "../redux/features/auth/authSlice";
import { varifyToken } from "../utils/verifyToken";



const Login = () => {
  const dispatch = useAppDispatch()
  const {register,handleSubmit} = useForm({
    defaultValues:{
     id:"2026030003",
     password:"alamshuvozeny123"
    }
  })
  const [login,{error}] = useLoginMutation()
  


  const onsubmit = async(data) =>{
  const userInfo = {
    id:data.id,
    password:data.password
  }
 const res = await login(userInfo).unwrap();
 const user = varifyToken(res.data.accessToken)
 const token = res.data.accessToken;
 dispatch(setUser({user:user,token}))
  }
  return (
    <form onSubmit={handleSubmit(onsubmit)}>
      <div>
        <label htmlFor="id">Id:</label>
        <input type="text" id="id" {...register('id')} />
      </div>
      <div>
        <label htmlFor="password">Id:</label>
        <input type="text" id="password" {...register('password')} />
      </div>
      <Button htmlType="submit">Login</Button>
    </form>
  );
};

export default Login;