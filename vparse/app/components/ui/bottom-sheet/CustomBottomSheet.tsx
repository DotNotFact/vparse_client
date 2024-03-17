import { ReactNode, forwardRef, useCallback, useMemo, useRef } from "react";
import BottomSheet, { BottomSheetModal } from "@gorhom/bottom-sheet";

type Ref = BottomSheet;

interface Props {
  children: ReactNode;
}

const CustomBottomSheet = forwardRef<Ref, Props>((props, ref) => {
  const { children } = props;
  const snapPoints = useMemo(() => ["25%", "50%", "75%"], []);

  return (
    <BottomSheet ref={ref} snapPoints={snapPoints} index={0}>
      <BottomSheetModal>{children}</BottomSheetModal>
    </BottomSheet>
  );
});

export default CustomBottomSheet;

// const BottomSheet = ({ bottomSheetRef, children }: any) => {
//   return (
//     <RBSheet
//       ref={bottomSheetRef}
//       height={350}
//       minClosingHeight={10}
//       minStartHeight={500}
//       openDuration={250}
//       closeOnDragDown={true}
//       closeOnPressBack={true}
//       closeOnPressMask={true}
//       customStyles={{
//         wrapper: {
//           backgroundColor: "rgba(0,0,0,0.5)",
//         },
//         draggableIcon: {
//           backgroundColor: "#cccc",
//           width: 100,
//         },
//         container: {
//           borderTopLeftRadius: 30,
//           borderTopRightRadius: 30,
//           backgroundColor: getColor("gray"),
//         },
//       }}
//     >
//       <View>{children}</View>
//     </RBSheet>
//   );
// };
