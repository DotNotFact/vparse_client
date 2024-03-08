import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { TypeIoniconsIconNames } from "@/shared/types/icon.types";
import { FC, ReactNode } from "react";
import { Ionicons } from "@expo/vector-icons";
import cn from "clsx";

export interface ISmallButtonProps extends TouchableOpacityProps {
  name: TypeIoniconsIconNames;
  children?: ReactNode;
  className?: string;
  color?: string;
  size?: number;
}

const SmallButton: FC<ISmallButtonProps> = ({
  className,
  name,
  size,
  color,
  children,
  ...rest
}) => {
  return (
    <TouchableOpacity
      className={cn(
        "bg-[#f1f1f1]/10 rounded-lg p-2 items-center justify-center",
        className
      )}
      {...rest}
    >
      {name && (
        <Ionicons name={name} size={size ?? hp(4)} color={color ?? "#fff"} />
      )}
      {children}
    </TouchableOpacity>
  );
};

export default SmallButton;
