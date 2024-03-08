import { FC, PropsWithChildren } from "react";
import { Text as TText } from "react-native";
import { IText } from "./text.interface";
import cn from "clsx";

const Text: FC<PropsWithChildren<IText>> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <TText className={cn("text-lg text-white", className)} {...rest}>
      {children}
    </TText>
  );
};

export default Text;
