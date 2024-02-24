import { Profile } from "@/components/screens/profile/Profile";
import { adminRoutes } from "@/navigation/admin.routes";
import { IRoute } from "@/navigation/navigation.types";

export const userRoutes: IRoute[] = [
  {
    name: "Profile",
    component: Profile,
  },
  // {
  //   name: "Home",
  //   component: Home,
  // },
  // {
  //   name: "Search",
  //   component: Search,
  // },
  // {
  //   name: "Genre",
  //   component: Genre,
  // },
  // {
  //   name: "Actor",
  //   component: Actor,
  // },
  // {
  //   name: "Movie",
  //   component: Movie,
  // },
];

export const routes = [...userRoutes, ...adminRoutes];
