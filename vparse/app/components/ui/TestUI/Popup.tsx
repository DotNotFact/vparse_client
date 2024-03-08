import { View, Text } from "react-native";
import { FC } from "react";

export const Popup: FC = () => {
  return (
    <View>
      <Text>Popup</Text>
    </View>
  );
};

// Ты точно хочешь выйти?

// import React, {useEffect} from 'react';
// import {Text, View, StyleSheet, BackHandler, Alert} from 'react-native';

// const App = () => {
//   useEffect(() => {
//     const backAction = () => {
//       Alert.alert('Постой!, ты точно хочешь выйти?', [
//         {
//           text: 'Назад',
//           onPress: () => null,
//           style: 'cancel',
//         },
//         {text: 'Выйти', onPress: () => BackHandler.exitApp()},
//       ]);
//       return true;
//     };

//     const backHandler = BackHandler.addEventListener(
//       'hardwareBackPress',
//       backAction,
//     );

//     return () => backHandler.remove();
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Click Back button!</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default App;

// popup (Напомнить позже, Ок, Отменить)

// import React from 'react';
// import {
//   Button,
//   PermissionsAndroid,
//   StatusBar,
//   StyleSheet,
//   Text,
//   View,
// } from 'react-native';

// const requestCameraPermission = async () => {
//   try {
//     const granted = await PermissionsAndroid.request(
//       PermissionsAndroid.PER
//       },
//     );
//     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//       console.log('Вы можете воспользоваться камерой');
//     } else {
//       console.log('В разрешении камеры отказано');
//     }
//   } catch (err) {
//     console.warn(err);
//   }
// };

// const App = () => (
//   <View style={styles.container}>
//     <Text style={styles.item}>Try permissions</Text>
//     <Button title="request permissions" onPress={requestCameraPermission} />
//   </View>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingTop: StatusBar.currentHeight,
//     backgroundColor: '#ecf0f1',
//     padding: 8,
//   },
//   item: {
//     margin: 24,
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });

// export default App;MISSIONS.CAMERA,
//       {
//         title: 'Классное фотоприложение Разрешение камеры',
//         message:
//           'Приложению Cool Photo необходим доступ к вашей камере, чтобы вы могли делать потрясающие снимки.',
//         buttonNeutral: 'Напомнить позже',
//         buttonNegative: 'Отмена',
//         buttonPositive: 'Ок',
//       },
//     );
//     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//       console.log('Вы можете воспользоваться камерой');
//     } else {
//       console.log('В разрешении камеры отказано');
//     }
//   } catch (err) {
//     console.warn(err);
//   }
// };

// const App = () => (
//   <View style={styles.container}>
//     <Text style={styles.item}>Try permissions</Text>
//     <Button title="request permissions" onPress={requestCameraPermission} />
//   </View>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingTop: StatusBar.currentHeight,
//     backgroundColor: '#ecf0f1',
//     padding: 8,
//   },
//   item: {
//     margin: 24,
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });

// export default App;

// Лучший

// import React from 'react';
// import {View, StyleSheet, ToastAndroid, Button, StatusBar} from 'react-native';

// const App = () => {
//   const showToast = () => {
//     ToastAndroid.show('A pikachu appeared nearby !', ToastAndroid.SHORT);
//   };

//   const showToastWithGravity = () => {
//     ToastAndroid.showWithGravity(
//       'All Your Base Are Belong To Us',
//       ToastAndroid.SHORT,
//       ToastAndroid.CENTER,
//     );
//   };

//   const showToastWithGravityAndOffset = () => {
//     ToastAndroid.showWithGravityAndOffset(
//       'A wild toast appeared!',
//       ToastAndroid.LONG,
//       ToastAndroid.BOTTOM,
//       25,
//       50,
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <Button title="Toggle Toast" onPress={() => showToast()} />
//       <Button
//         title="Toggle Toast With Gravity"
//         onPress={() => showToastWithGravity()}
//       />
//       <Button
//         title="Toggle Toast With Gravity & Offset"
//         onPress={() => showToastWithGravityAndOffset()}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingTop: StatusBar.currentHeight,
//     backgroundColor: '#888888',
//     padding: 8,
//   },
// });

// export default App;

// При нажатии на текст, анимация, под текстом появляется надпись

// import React, {useState} from 'react';
// import {
//   LayoutAnimation,
//   Platform,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   UIManager,
//   View,
// } from 'react-native';

// if (
//   Platform.OS === 'android' &&
//   UIManager.setLayoutAnimationEnabledExperimental
// ) {
//   UIManager.setLayoutAnimationEnabledExperimental(true);
// }
// const App = () => {
//   const [expanded, setExpanded] = useState(false);

//   return (
//     <View style={style.container}>
//       <TouchableOpacity
//         onPress={() => {
//           LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
//           setExpanded(!expanded);
//         }}>
//         <Text>Press me to {expanded ? 'collapse' : 'expand'}!</Text>
//       </TouchableOpacity>
//       {expanded && (
//         <View style={style.tile}>
//           <Text>I disappear sometimes!</Text>
//         </View>
//       )}
//     </View>
//   );
// };

// const style = StyleSheet.create({
//   tile: {
//     backgroundColor: 'lightgrey',
//     borderWidth: 0.5,
//     borderColor: '#d6d7da',
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     overflow: 'hidden',
//   },
// });

// export default App;
