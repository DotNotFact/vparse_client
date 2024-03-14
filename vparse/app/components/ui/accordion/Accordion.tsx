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
import { AccordionNested } from "./AccordionNested";
import { Category } from "@/shared/types/accordion.types";

type Props = {
  value: Category;
  type: string;
};

export const Accordion = ({ value, type }: Props) => {
  const listRef = useAnimatedRef();
  const heightValue = useSharedValue(0);
  const open = useSharedValue(false);

  const progress = useDerivedValue(() =>
    open.value ? withTiming(1) : withTiming(0)
  );

  const heightAnimationStyle = useAnimatedStyle(() => ({
    height: heightValue.value,
  }));

  const toggleAccordion = () => {
    if (heightValue.value === 0) {
      runOnUI(() => {
        "worklet";
        heightValue.value = withTiming(measure(listRef)!.height);
      })();
    } else {
      heightValue.value = withTiming(0);
    }
    open.value = !open.value;
  };

  //   const toggleAccordion = useCallback(() => {
  //     runOnUI(() => {
  //       "worklet";
  //       const measured = measure(listRef);
  //       if (measured) {
  //         // Проверяем, не равен ли результат измерения null
  //         heightValue.value = measured.height; // Теперь безопасно используем measured.height
  //       }
  //     })();
  //     open.value = open.value === 0 ? 1 : 0;
  //   }, []);
  //   const toggleAccordion = useCallback(() => {
  //     if (heightValue.value === 0 && listRef.current) {
  //       // Ensure measurement is done on the UI thread
  //       runOnUI(() => {
  //         "worklet";
  //         heightValue.value = measure(listRef).height;
  //       })();
  //     }
  //     open.value = open.value === 0 ? 1 : 0;
  //   }, [heightValue, listRef, open]);

  return (
    <View className="bg-[#f1f1f1]/10 overflow-hidden rounded-lg my-2 border-[1px] border-[#111]">
      <Pressable
        onPress={toggleAccordion}
        className="p-2 flex-row justify-between items-center" // flexShrink: 1, flex: 1
      >
        <Text className="text-xl font-medium text-start m-2">
          {value.title}
        </Text>
        <Chevron progress={progress} />
      </Pressable>
      <Animated.View style={heightAnimationStyle}>
        <Animated.View className={"absolute top-0 w-full"} ref={listRef}>
          {type === "regular" &&
            value.content.map((v, i) => {
              return (
                <View key={i} className="p-4 pt-0">
                  <Text>{v}</Text>
                </View>
              );
            })}
          {type === "nested" && (
            <>
              <View className="p-4 pt-0">
                <Text>{value.content}</Text>
              </View>
              {value.contentNested.map((val, ind) => {
                return (
                  <AccordionNested
                    value={val}
                    key={ind}
                    parentHeighValue={heightValue}
                  />
                );
              })}
            </>
          )}
        </Animated.View>
      </Animated.View>
    </View>
  );
};

export default Accordion;
