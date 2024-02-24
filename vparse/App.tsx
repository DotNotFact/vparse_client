import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AuthProvider from "@/providers/auth/AuthProvider";
import Navigation from "@/navigation/Navigation";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import Toast from "@/components/ui/Toast";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default function App() {
  return (
    <>
      <ExpoStatusBar style="dark" translucent={true} hidden={false} />
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <SafeAreaProvider>
            <Navigation />
          </SafeAreaProvider>
          <Toast />
        </AuthProvider>
      </QueryClientProvider>
    </>
  );
}

// @react-navigation/bottom-tabs
// @react-navigation/drawer

// react-native-dropdown-select-list

// expo-av - позволяет воспроизводить аудио и видео файлы, записывать аудио, управлять воспроизведением, и многое другое.
// expo-blur - предоставляет компонент BlurView, который позволяет добавлять эффект размытия (blur) к частям интерфейса.
// expo-checkbox - предоставляет компонент Checkbox, который позволяет создавать переключатели (чекбоксы)
// expo-image-picker - предоставляет API для выбора изображений из галереи устройства или съемки новых фотографий с камеры.

// "extra": {
//   "eas": {
//     "projectId": "projectId-YKFH7vuil2iju5hbuk4"
//   }
// }

// react-native-wheel-scrollview-picker - для возраста в фильтре

// "@expo/metro-runtime": "~3.1.3",
// "@react-native-community/cli-platform-android": "^12.3.5",
// "babel-plugin-inline-dotenv": "^1.7.0",
// "babel-preset-react-native": "^4.0.1",
// "expo-blur": "~12.9.2",
// "expo-clipboard": "^5.0.1",
// "expo-notifications": "^0.27.6",
// "expo-splash-screen": "^0.26.4",
// "expo-status-bar": "~1.11.1",
// "react-dom": "^18.2.0",
// "react-native-app-auth": "^7.1.0",
// "react-native-dropdown-picker": "^5.4.6",
// "react-native-gesture-handler": "^2.15.0",
// "react-native-pell-rich-editor": "^1.9.0",
// "react-native-render-html": "^6.3.4",
// "react-native-screens": "^3.29.0",
// "react-native-toast-message": "^2.2.0",
// "react-native-web": "~0.19.6",
