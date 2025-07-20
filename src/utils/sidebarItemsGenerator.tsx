import { TSidebarItems, TUserPaths } from "../types";
import { NavLink } from "react-router-dom";

export const sidebarItemGenerator = (items: TUserPaths[], role: string) => {
  const sideBarItems = items.reduce((acc: TSidebarItems[], item) => {
    if (item.path && item.name) {
      acc.push({
        key: item.name,
        label: <NavLink to={`/${role}/${item.path}`}> {item.name} </NavLink>,
      });
    }
    if (item.children) {
      acc.push({
        key: item.name,
        label: item.name,
        children: item.children.map((child) => {
          if (child.name) {
            return {
              key: child.name,
              label: (
                <NavLink to={`/${role}/${child.path}`}>{child.name}</NavLink>
              ),
            };
          }
        }),
      });
    }
    return acc;
  }, []);
  return sideBarItems;
};

//some code added 