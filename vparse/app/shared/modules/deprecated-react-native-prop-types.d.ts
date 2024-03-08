// +-, ???
declare module "deprecated-react-native-prop-types" {
  import {
    TextProps as RNTextProps,
    PressableProps as RNPressableProps,
  } from "react-native";

  export interface TextProps extends RNTextProps {
    children?: ReactNode;
    className?: string;
  }

  export interface PressableProps extends RNPressableProps {
    icon?: TypeFeatherIconNames;
    children?: ReactNode;
    className?: string;
    // color?: string;
    // isSmall?: boolean;
    // iconSize?: number;
    // style?: ViewStyle;
  }
}
