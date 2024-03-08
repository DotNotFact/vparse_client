import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Header } from "@/components/screens/Header/Header";
import { BottomMenu } from "@/components/ui";
import { useAuth } from "@/hooks/useAuth";
import React from "react";

import {
  authRoutes,
  routes,
  userRoutes,
} from "@/navigation/routes/user.routes";
import { TypeRootStackParamList } from "./navigation.types";

const BottomTab = createBottomTabNavigator<TypeRootStackParamList>();

const BottomTabNavigation = () => {
  const { user } = useAuth();

  return (
    <BottomTab.Navigator
      tabBar={(props) => (
        <BottomMenu
          userStatus={user ? (user.isAdmin ? "admin" : "user") : null}
          {...props}
        />
      )}
      sceneContainerStyle={{
        backgroundColor: "#19191A",
      }}
    >
      {(user ? (user.isAdmin ? routes : userRoutes) : authRoutes).map(
        (route) => (
          <BottomTab.Screen
            key={route.name}
            {...route}
            options={{
              headerShown: route.headerShown,
              header: (props) => <Header {...props} />,
            }}
          />
        )
      )}
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigation;
