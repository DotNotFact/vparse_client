import { ViewStyle } from "react-native";
import { ItemType } from "react-native-dropdown-picker";

export interface IDropdown {
  options?: ItemType<any>[];
  isMulti?: boolean;
  style?: ViewStyle;
}
