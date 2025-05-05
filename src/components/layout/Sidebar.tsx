import { Layout, Menu } from "an
import { sidebarItemGenerator } from "../../utils/sidebarItemsGenerator";
import { adminPaths } from "../../routes/admin.route";
import { useAppSelector } from "../../redux/hook";
import { TUser, useCurentUser, useCurrentToken } from "../../redux/features/auth/authSlice";
import { varifyToken } from "../../utils/verifyToken";

const { Sider } = Layout;
const userRole = {
  ADMIN: "admin",
  FACULTY: "faculty",
  STUDENT: "student",
};
const Sidebar = () => {
const token = useAppSelector(useCurrentToken)
let user;
if (token) {
  user = varifyToken(token)
}


  let sideBarItems;
  switch ((user as TUser)!.role) {
    case userRole.ADMIN:
      sideBarItems = sidebarItemGenerator(adminPaths, userRole.ADMIN);
      break;
    case userRole.FACULTY:
      sideBarItems = sidebarItemGenerator(adminPaths, userRole.FACULTY);
      break;
    case userRole.STUDENT:
      sideBarItems = sidebarItemGenerator(adminPaths, userRole.STUDENT);
      break;
    default:
      break;
  }
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      style={{height:"100vh",position:"sticky",top:0,left:0}}
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div
        style={{
          color: "white",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "30px 0 ",
        }}
      >
        <h1>University Management System</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sideBarItems}
      />
    </Sider>
  );
};

export default Sidebar;
