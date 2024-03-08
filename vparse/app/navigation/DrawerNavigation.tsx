// import { SidebarRight } from "@/components/screens/Sidebar/SidebarRight";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import { useAuth } from "@/hooks/useAuth";
// import React from "react";
// import { authRoutes, routes, userRoutes } from "./routes/user.routes";
// import { Header } from "@/components/screens/Header/Header";

// const Drawer = createDrawerNavigator();

// const DrawerNavigation = () => {
//   const { user } = useAuth();

//   return (
//     <Drawer.Navigator
//       screenOptions={{
//         drawerPosition: "right",
//         sceneContainerStyle: {
//           backgroundColor: "#19191A",
//         },
//         drawerHideStatusBarOnOpen: false,
//         drawerStatusBarAnimation: "slide", // Анимация для статус-бара при открытии drawer
//         swipeEnabled: false,
//       }}
//       drawerContent={(props) => <SidebarRight {...props} />}
//     >
//       {(user ? (user.isAdmin ? routes : userRoutes) : authRoutes).map(
//         (route) => (
//           <Drawer.Screen
//             key={route.name}
//             {...route}
//             options={{
//               headerShown: route.headerShown,
//               header: (props) => <Header {...props} />,
//             }}
//           />
//         )
//       )}
//     </Drawer.Navigator>
//   );
// };

// export default DrawerNavigation;
