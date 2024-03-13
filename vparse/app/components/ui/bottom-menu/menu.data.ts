import { IMenuItem } from "./menu.interface";

export const userMenuItems: IMenuItem[] = [
  {
    iconName: "home",
    path: "Home",
  },
  {
    iconName: "heart",
    path: "Favorites",
  },
  {
    iconName: "user",
    path: "Profile",
  },
];

export const adminMenuItems: IMenuItem[] = [
  {
    iconName: "shield",
    path: "RoleManager",
  },
  // {
  //   iconName: "plus",
  //   path: "RoleManager",
  // },
];

export const menuItems: IMenuItem[] = [...userMenuItems, ...adminMenuItems];
