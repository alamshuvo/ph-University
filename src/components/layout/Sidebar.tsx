import { Layout, Menu } from "antd";
import { sidebarItemGenerator } from "../../utils/sidebarItemsGenerator";
import { adminPaths } from "../../routes/admin.route";

const  {Sider} = Layout
const Sidebar = () => {
    return (
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
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={sidebarItemGenerator(adminPaths,"admin")} />
      </Sider>
    );
};

export default Sidebar;