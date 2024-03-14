import { Ionicons } from "@expo/vector-icons";
import React from "react";

import Animated, {
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

type Props = {
  progress: Readonly<SharedValue<0 | 1>>;
};

const Chevron = ({ progress }: Props) => {
  const iconStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${progress.value * -180}deg` }],
  }));

  return (
    <Animated.View style={iconStyle}>
      <Ionicons name="chevron-down" size={24} />
    </Animated.View>
  );
};

export default Chevron;
