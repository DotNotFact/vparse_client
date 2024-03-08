import { useCheckAuth } from "@/providers/auth/useCheckAuth";
import BottomTabNavigation from "./BottomTabNavigation";
import { FC, useEffect, useState } from "react";

import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";

const Navigation: FC = () => {
  const [currentRoute, setCurrentRoute] = useState<string | undefined>(
    undefined
  );

  const navRef = useNavigationContainerRef();

  useEffect(() => {
    setCurrentRoute(navRef.getCurrentRoute()?.name);

    const listener = navRef.addListener("state", () =>
      setCurrentRoute(navRef.getCurrentRoute()?.name)
    );

    return () => {
      navRef.removeListener("state", listener);
    };
  }, []);

  useCheckAuth(currentRoute);

  return (
    <NavigationContainer ref={navRef}>
      <BottomTabNavigation />
    </NavigationContainer>
  );
};

export default Navigation;
