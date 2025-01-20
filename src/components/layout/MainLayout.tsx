import {Button, Layout}  from "antd";
import {  Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useAppDispatch } from "../../redux/hook";
import { logOut } from "../../redux/features/auth/authSlice";

const  {Header, Content} = Layout

export default function MainLayout() {
  const dispatch = useAppDispatch()
 const handleLogOut = () => {
  dispatch(logOut())
 }
  return (
    <Layout style={{height:"100vh"}}>
   <Sidebar></Sidebar>
    <Layout>
      <Header style={{ padding: 0}}> 
        <Button onClick={handleLogOut}>LogOut</Button>
      </Header>
      <Content style={{ margin: '24px 16px 0' }}>
        <div
          style={{
            padding: 24,
            minHeight: 360,
          }}
        >
        <Outlet></Outlet>
        </div>
      </Content>
     
    </Layout>
  </Layout>
  )
}
