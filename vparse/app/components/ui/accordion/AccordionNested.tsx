import { Pressable, StyleSheet, View } from "react-native";
import Chevron from "./Chevron";
import Text from "../text/Text";
import React from "react";

import Animated, {
  useAnimatedRef,
  useSharedValue,
  useAnimatedStyle,
  runOnUI,
  measure,
  useDerivedValue,
  withTiming,
  SharedValue,
} from "react-native-reanimated";
import { NestedItem } from "@/shared/types/accordion.types";

type Props = {
  value: NestedItem;
  parentHeighValue: SharedValue<number>;
};

export const AccordionNested = ({ value, parentHeighValue }: Props) => {
  const listRef = useAnimatedRef();
  const heightValue = useSharedValue(0);
  const open = useSharedValue(false);
  const progress = useDerivedValue(() =>
    open.value ? withTiming(1) : withTiming(0)
  );

  const heightAnimationStyle = useAnimatedStyle(() => ({
    height: heightValue.value,
  }));

  const toggleAccordionNested = () => {
    if (heightValue.value === 0) {
      runOnUI(() => {
        "worklet";
        heightValue.value = withTiming(measure(listRef)!.height);
        parentHeighValue.value = withTiming(
          parentHeighValue.value + measure(listRef)!.height
        );
      })();
    } else {
      runOnUI(() => {
        "worklet";
        heightValue.value = withTiming(0);
        parentHeighValue.value = withTiming(
          parentHeighValue.value - measure(listRef)!.height
        );
      })();
    }
    open.value = !open.value;
  };

  return (
    <View className="bg-[#f1f1f1]/10 overflow-hidden rounded-lg my-3 border-[1px] border-[#111]">
      <Pressable
        onPress={toggleAccordionNested}
        className="p-4 flex-row justify-between items-center"
      >
        <Text className="text-xl font-medium">{value.title}</Text>
        <Chevron progress={progress} />
      </Pressable>
      <Animated.View style={heightAnimationStyle}>
        <Animated.View className={"absolute top-0 w-full"} ref={listRef}>
          {value.content.map((v, i) => {
            return (
              <View key={i} className="p-4">
                <Text>{v}</Text>
              </View>
            );
          })}
        </Animated.View>
      </Animated.View>
    </View>
  );
};
