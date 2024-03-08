// import { LinearGradient } from "expo-linear-gradient";
// import { Fragment, useCallback } from "react";
// import { Choice } from "./Choice";

// import {
//   View,
//   Text,
//   Image,
//   StyleSheet,
//   Dimensions,
//   Animated,
// } from "react-native";

// interface ICardUser{

// }

// const { width, height } = Dimensions.get("screen");

// export const Card = ({
//   id,
//   firstName,
//   lastName,
//   imageUrl,
//   bDate,
//   isFirst,
//   swipe,
//   titlSign,
//   ...rest
// }: any) => {
//   // Поворот карты на основе свайпа
//   const rotate = Animated.multiply(swipe.x, titlSign).interpolate({
//     inputRange: [-100, 0, 100],
//     outputRange: ["8deg", "0deg", "-8deg"],
//   });

//   const animatedCardStyle = {
//     transform: [...swipe.getTranslateTransform(), { rotate }],
//   };

//   // Анимация непрозрачности для кнопки "LIKE"
//   const likeOpacity = swipe.x.interpolate({
//     inputRange: [25, 100],
//     outputRange: [0, 1],
//     extrapolate: "clamp",
//   });

//   // Анимация непрозрачности для кнопки "NOPE"
//   const nopeOpacity = swipe.x.interpolate({
//     inputRange: [-100, -25],
//     outputRange: [1, 0],
//     extrapolate: "clamp",
//   });

//   // Условное отображение кнопок "LIKE" и "NOPE"
//   const renderChoice = useCallback(() => {
//     return (
//       <Fragment>
//         <Animated.View
//           style={[
//             styles.choiceContainer,
//             styles.likeContainer,
//             { opacity: likeOpacity },
//           ]}
//         >
//           <Choice title="Нравиться" type="like" />
//         </Animated.View>
//         <Animated.View
//           style={[
//             styles.choiceContainer,
//             styles.nopeContainer,
//             { opacity: nopeOpacity },
//           ]}
//         >
//           <Choice title="Не нравиться" type="nope" />
//         </Animated.View>
//       </Fragment>
//     );
//   }, [likeOpacity, nopeOpacity]);

//   return (
//     <Animated.View
//       style={[styles.container, isFirst && animatedCardStyle]}
//       {...rest}
//     >
//       <Image
//         source={{
//           uri: imageUrl,
//         }}
//         style={styles.image}
//       />
//       <LinearGradient
//         colors={["transparent", "rgba(0, 0, 0, .9)"]}
//         style={styles.gradient}
//       />
//       <View style={styles.userContainer}>
//         <Text>
//           {firstName} {lastName}
//         </Text>
//         <Text>{bDate}</Text>
//       </View>
//       {isFirst && renderChoice()}
//     </Animated.View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     position: "absolute",
//     zIndex: 111,
//     top: 11,
//   },
//   image: {
//     height: height * 0.7,
//     width: width * 0.9,
//     objectFit: "cover",
//     borderRadius: 11,
//   },
//   gradient: {
//     position: "absolute",
//     borderRadius: 11,
//     height: 250,
//     bottom: 0,
//     right: 0,
//     left: 0,
//   },
//   userContainer: {
//     position: "absolute",
//     padding: 15,
//     bottom: 0,
//     left: 0,
//     gap: 8,
//   },
//   choiceContainer: {
//     position: "absolute",
//     top: 100,
//   },
//   likeContainer: {
//     transform: [{ rotate: "-30deg" }],
//     left: 25,
//   },
//   nopeContainer: {
//     transform: [{ rotate: "30deg" }],
//     right: 25,
//   },
// });
