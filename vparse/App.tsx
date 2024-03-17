import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import AuthProvider from "@/providers/auth/AuthProvider";
import { Platform, StatusBar } from "react-native";
import Navigation from "@/navigation/Navigation";
import { Toast } from "@/components/ui";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

// tree shaking
// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       refetchOnWindowFocus: false,
//     },
//   },
// });
// <QueryClientProvider client={queryClient}>

// const { colorScheme, toggleColorScheme } = useColorScheme();
// const navigation = useNavigation();
// const [fontsLoaded, fontError] = useFonts({
//   SpaceGroteskSemiBold: require("../font/SpaceGrotesk-SemiBold.ttf"),
//   SpaceGroteskBold: require("../font/SpaceGrotesk-Bold.ttf"),
//   SpaceGroteskMedium: require("../font/SpaceGrotesk-Medium.ttf"),
// });

// const onLayoutRootView = useCallback(async () => {
//   if (fontsLoaded || fontError) {
//     await SplashScreen.hideAsync();
//   }
// }, [fontsLoaded, fontError]);

// if (!fontsLoaded) {
//   return null;
// }
// onLayout={onLayoutRootView}

const android = Platform.OS == "android";

export default function App() {
  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
        paddingTop: android ? StatusBar.currentHeight : 0,
      }}
    >
      <ExpoStatusBar
        style="light"
        translucent={true}
        backgroundColor="#19191A"
      />
      <BottomSheetModalProvider>
        <AuthProvider>
          {/* SafeAreaProvider */}
          <Navigation />
          <Toast />
        </AuthProvider>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}

// // expo-av - позволяет воспроизводить аудио и видео файлы, записывать аудио, управлять воспроизведением, и многое другое.
// // expo-blur - предоставляет компонент BlurView, который позволяет добавлять эффект размытия (blur) к частям интерфейса.
// // expo-checkbox - предоставляет компонент Checkbox, который позволяет создавать переключатели (чекбоксы)
// // expo-image-picker - предоставляет API для выбора изображений из галереи устройства или съемки новых фотографий с камеры.

// // react-native-wheel-scrollview-picker - для возраста в фильтре

// // @expo/metro-runtime
// // @react-native-community/cli-platform-android
// // babel-plugin-inline-dotenv
// // babel-preset-react-native
// // expo-blur
// // expo-clipboard
// // expo-notifications
// // expo-splash-screen
// // expo-status-bar
// // react-dom
// // react-native-app-auth
// // react-native-pell-rich-editor
// // react-native-render-html
// // react-native-screens
// // react-native-toast-message
// // react-native-web

// // "extra": {
// //   "eas": {
// //     "projectId": "projectId-*********"
// //   }
// // }
