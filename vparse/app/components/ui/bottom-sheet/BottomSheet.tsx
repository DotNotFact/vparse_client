import RBSheet from "@nonam4/react-native-bottom-sheet";
import { View } from "react-native";
import React from "react";

const BottomSheet = ({ bottomSheetRef, children }: any) => {
  return (
    <RBSheet
      ref={bottomSheetRef}
      height={300}
      openDuration={250}
      closeOnDragDown={true}
      closeOnPressBack={true}
      closeOnPressMask={true}
      customStyles={{
        wrapper: {
          backgroundColor: "rgba(0,0,0,0.5)",
        },
        draggableIcon: {
          backgroundColor: "#cccc",
          width: 100,
        },
        container: {
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        },
      }}
    >
      <View>{children}</View>
    </RBSheet>
  );
};

export default BottomSheet;
