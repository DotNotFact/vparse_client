import { View, Text } from "react-native";
import { FC, useState } from "react";
import Button from "@/components/ui/button/Button";
import WebView from "react-native-webview";
import { useAuth } from "@/hooks/useAuth";
import { IUser } from "@/shared/types/user.interface";

export const Auth: FC = () => {
  const [isWebView, setIsWebView] = useState(false);
  const { setUser } = useAuth();

  const handleLoginPress = () => {
    setIsWebView((value) => !value);
  };

  const handleNavigationStateChange = (event: any) => {
    if (event.url.startsWith("com.vparse://callback")) {
      const url = new URL(event.url);
      const params = new URLSearchParams(url.search);
      const user: IUser = {
        _id: "",
        first_name: params.get("first_name") || "",
        last_name: params.get("last_name") || "",
        photo_200: params.get("photo") || "",
        isAdmin: false,
      };
      setUser(user);
      setIsWebView(true);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {isWebView ? (
        <WebView
          originWhitelist={["*"]}
          source={{ html: a }}
          style={{ width: "100%", height: 300 }}
        />
      ) : (
        // <WebView
        //   source={{ uri: "http://192.168.0.19:4000/Auth/Login" }}
        //   onNavigationStateChange={handleNavigationStateChange}
        // />
        <Button onPress={handleLoginPress}>
          <Text>Войти</Text>
        </Button>
      )}
    </View>
  );
};

const a = `
<body>
</body>`;
