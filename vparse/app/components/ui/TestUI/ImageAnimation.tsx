// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import React from "react";
// import HomeScreen from "../screens/HomeScreen";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import { Button, View, Text } from "react-native";

// export type AppStackParamsList = {
//   HomeScreen: undefined;
// };

// const Stack = createNativeStackNavigator<AppStackParamsList>();
// const Drawer = createDrawerNavigator();

// export default function AppStack() {
//   return <HomeScreen />;
// }

// function EmptyScreen() {
//   return <View />;
// }

// function Feed({ navigation }: any) {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>Feed Screen</Text>
//       <Button title="Go to Root" onPress={() => navigation.navigate("Root")} />
//       <Button
//         title="Go to Root, Profile"
//         onPress={() => navigation.navigate("Root", { screen: "Settings" })}
//       />
//     </View>
//   );
// }

// function Root() {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="Home" component={HomeScreen} />
//       <Drawer.Screen name="Feed" component={Feed} />
//       <Drawer.Screen name="Settings" component={EmptyScreen} />
//     </Drawer.Navigator>
//   );
// }
