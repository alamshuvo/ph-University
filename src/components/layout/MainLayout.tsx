import {Layout,Menu}  from "antd";
import {  Outlet } from "react-router-dom";
import { adminSideBarItems } from "../../routes/admin.route";

const  {Header, Content,Sider} = Layout

// const items:MenuProps["items"] = [
//  {
//     key:"Dashboard",
//     label:<NavLink to={"/admin/dashboard"}>Dashboard</NavLink>,
//  },
//  {
//     key:"2",
//     label:"Student",
//  },
//  {
//     key:"faculty",
//     label:"faculty",
//     children:[
//         {
//             key:"5",
//             label:<NavLink to={"/admin/create-admin"}>Create Admin</NavLink>
//         },
//         {
//           key:"faculty",
//           label:<NavLink to={"/admin/create-faculty"}>Create Faculty</NavLink>
//         },
//         {
//             key:"6",
//             label:<NavLink to={"/admin/create-student"}>Create Student</NavLink>
//         }
//     ]
//  }
// ]
export default function MainLayout() {

  return (
    <Layout style={{height:"100vh"}}>
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div style={{color:"white",textAlign:"center",display:"flex",justifyContent:"center",
        alignItems:"center",margin:"30px 0 "
      }}> 
        <h1>University Management System</h1>
      </div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={adminSideBarItems} />
    </Sider>
    <Layout>
      <Header style={{ padding: 0}} />
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
