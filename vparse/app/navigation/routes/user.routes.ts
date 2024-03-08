import { Auth } from "@/components/screens/auth/Auth";
import { Favorites } from "@/components/screens/favorites/Favorites";
import { Home } from "@/components/screens/home/Home";
import { Profile } from "@/components/screens/profile/Profile";
import { Screen404 } from "@/components/screens/system/Screen404";
import { adminRoutes } from "@/navigation/routes/admin.routes";
import { IRoute } from "../navigation.types";

export const authRoutes: IRoute[] = [
  {
    name: "Auth",
    component: Auth,
    headerShown: false,
  },
];

export const userRoutes: IRoute[] = [
  {
    name: "Home",
    component: Home,
    headerShown: false,
  },
  {
    name: "Favorites",
    component: Favorites,
    headerShown: true,
  },
  {
    name: "Profile",
    component: Profile,
    headerShown: false,
  },
  {
    name: "Screen404",
    component: Screen404,
    headerShown: true,
  },
];

export const routes = [...userRoutes, ...adminRoutes];
