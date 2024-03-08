import { NavigationHelpers, ParamListBase } from "@react-navigation/native";
import { BottomTabNavigationEventMap } from "@react-navigation/bottom-tabs";
import MenuItem from "@/components/ui/bottom-menu/MenuItem";
import { menuItems, userMenuItems } from "./menu.data";
import { View } from "react-native";
import { FC } from "react";

interface IBottomMenuProps {
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>; // Используйте тип из React Navigation;
  userStatus: TypeSaveUserStatus;
  state: any;
}

type TypeSaveUserStatus = "admin" | "user" | null;

const BottomMenu: FC<IBottomMenuProps> = ({
  state,
  navigation,
  userStatus,
}) => {
  const currentRoute = state.routeNames[state.index]; // Получение имени активного маршрута

  return (
    <View
      className={"bg-[#19191A] flex-row justify-between items-center w-full"}
    >
      {userStatus
        ? (userStatus === "admin" ? menuItems : userMenuItems).map((item) => (
            <MenuItem
              key={item.path}
              item={item}
              navigation={navigation}
              currentRoute={currentRoute}
            />
          ))
        : null}
    </View>
  );
};

export default BottomMenu;
