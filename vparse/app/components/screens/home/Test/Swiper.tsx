// import React, { useState, useRef } from "react";
// import { View, Animated, PanResponder, Dimensions } from "react-native";

// const { width } = Dimensions.get("window");

// export const Swiper = ({ users }: any) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const swipe = useRef(new Animated.ValueXY()).current;

//   const panResponder = PanResponder.create({
//     onStartShouldSetPanResponder: () => true,
//     onPanResponderMove: Animated.event([null, { dx: swipe.x }], {
//       useNativeDriver: false,
//     }),
//     onPanResponderRelease: (_, { dx }) => {
//       if (dx > 120) {
//         // Swipe Right
//         Animated.spring(swipe, {
//           toValue: { x: width + 100, y: 0 },
//           useNativeDriver: true,
//         }).start(() => {
//           setCurrentIndex(currentIndex + 1);
//           swipe.setValue({ x: 0, y: 0 });
//         });
//       } else if (dx < -120) {
//         // Swipe Left
//         Animated.spring(swipe, {
//           toValue: { x: -width - 100, y: 0 },
//           useNativeDriver: true,
//         }).start(() => {
//           setCurrentIndex(currentIndex + 1);
//           swipe.setValue({ x: 0, y: 0 });
//         });
//       } else {
//         // Reset position
//         Animated.spring(swipe, {
//           toValue: { x: 0, y: 0 },
//           friction: 5,
//           useNativeDriver: true,
//         }).start();
//       }
//     },
//   });

//   const renderUsers = () => {
//     return users
//       .map((user: any, index: any) => {
//         if (index < currentIndex) {
//           return null; // Don't render cards that have been swiped away.
//         }

//         const isFirst = index === currentIndex;
//         const animatedStyle = isFirst && {
//           transform: [...swipe.getTranslateTransform()],
//         };

//         return (
//           <Animated.View
//             key={user.id}
//             style={[{ backgroundColor: "red" }, animatedStyle]}
//             {...(isFirst ? panResponder.panHandlers : {})}
//           >
//             {/* Card content */}
//           </Animated.View>
//         );
//       })
//       .reverse(); // Keep this reverse to maintain the stack order without using reverse() in logic.
//   };

//   return <View>{renderUsers()}</View>;
// };
