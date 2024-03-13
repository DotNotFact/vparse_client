import Admin from "@/components/Admin";
import { IRoute } from "../navigation.types";
import { RoleManager } from "@/components/screens/admin/role-manager/RoleManager";

export const adminRoutes: IRoute[] = [
  {
    name: "Admin",
    component: Admin,
    isAdmin: true,
  },
  {
    name: "RoleManager",
    component: RoleManager,
    isAdmin: true,
  },
  // {
  //   name: "UserList",
  //   component: UserList,
  //   isAdmin: true,
  // },
];
