import { LinearGradient } from "expo-linear-gradient";
import { IButtonProps } from "./button.interface";
import { Pressable, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { FC } from "react";
import cn from "clsx";

const Button: FC<IButtonProps> = ({ className, icon, children, ...rest }) => {
  return (
    <Pressable
      className={cn("w-full justify-center items-center", className)}
      {...rest}
    >
      <LinearGradient
        start={{ x: 0, y: 0.75 }}
        end={{ x: 1, y: 0.25 }}
        className={cn("w-full p-3 rounded-lg items-center", {
          "flex-row": !!icon,
        })}
        colors={["#83EAF1", "#63A4FF"]}
      >
        {icon && <Feather name={icon} size={18} color="white" />}
        <Text
          className={cn("text-white text-center font-medium text-lg", {
            "ml-2": !!icon,
          })}
        >
          {children}
        </Text>
      </LinearGradient>
    </Pressable>
  );
};

export default Button;
