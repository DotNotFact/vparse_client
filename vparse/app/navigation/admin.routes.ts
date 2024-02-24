import { IRoute } from "@/navigation/navigation.types";
import Admin from "./Admin";

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
