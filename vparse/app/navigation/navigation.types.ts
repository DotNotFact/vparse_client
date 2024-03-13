import { ComponentType } from "react";

export type TypeRootStackParamList = {
  Auth: undefined;
  Home: undefined;
  Profile: undefined;
  Favorites: undefined;
  AdminButton: undefined;
  Screen404: undefined;
  // User: {
  //   slug: string;
  // };
} & TypeRootStackAdminList;

type TypeRootStackAdminList = {
  Admin: undefined;
  RoleManager: undefined;
  // UserEdit: { id: string };
  // UserList: undefined;
};

export interface IRoute {
  name: keyof TypeRootStackParamList;
  component: ComponentType;
  headerShown?: boolean;
  filterShown?: boolean;
  isAdmin?: boolean;
}
