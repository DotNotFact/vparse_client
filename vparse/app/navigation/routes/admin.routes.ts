import Admin from "@/components/Admin";
import { IRoute } from "../navigation.types";

export const adminRoutes: IRoute[] = [
  {
    name: "Admin",
    component: Admin,
    isAdmin: true,
  },
  // {
  //   name: "UserList",
  //   component: UserList,
  //   isAdmin: true,
  // },
];
