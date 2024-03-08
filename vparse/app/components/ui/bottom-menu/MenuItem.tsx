import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import type { IMenuItem } from "./menu.interface";
import { getColor } from "@/config/colors.config";
import { Pressable, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { FC } from "react";
import cn from "clsx";

interface IMenuItemProps {
  item: IMenuItem;
  navigation: any;
  currentRoute?: string;
}

const MenuItem: FC<IMenuItemProps> = ({
  item,
  navigation,
  currentRoute,
}: any) => {
  const isActive = currentRoute === item.path;

  return (
    <View className="m-3 items-center rounded-lg">
      <Pressable
        className={cn("rounded-lg p-2 w-full items-center justify-center", {
          "bg-[#212121]": isActive,
        })}
        onPress={() => navigation.navigate(item.path)}
      >
        <Feather
          name={item.iconName}
          size={hp(4.5)}
          color={isActive ? getColor("white.400") : getColor("gray.200")}
        />
      </Pressable>
    </View>
  );
};

export default MenuItem;
