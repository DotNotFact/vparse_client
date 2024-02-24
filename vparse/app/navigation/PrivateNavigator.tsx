import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TypeRootStackParamList } from "@/navigation/navigation.types";
import { routes, userRoutes } from "@/navigation/user.routes";
import { Auth } from "@/components/screens/auth/Auth";
import { useAuth } from "@/hooks/useAuth";
import { FC } from "react";

const Stack = createNativeStackNavigator<TypeRootStackParamList>();

const PrivateNavigator: FC = () => {
  const { user } = useAuth();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        contentStyle: {
          backgroundColor: "#090909",
        },
      }}
    >
      {user ? (
        user.isAdmin ? (
          routes.map((route) => <Stack.Screen key={route.name} {...route} />)
        ) : (
          userRoutes.map((route) => (
            <Stack.Screen key={route.name} {...route} />
          ))
        )
      ) : (
        <Stack.Screen name="Auth" component={Auth} />
      )}
    </Stack.Navigator>
  );
};

export default PrivateNavigator;
