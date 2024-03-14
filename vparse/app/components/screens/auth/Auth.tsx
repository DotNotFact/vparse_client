import { getAuthGradientColors, getColor } from "@/config/colors.config";
import { saveUserToStorage } from "@/services/auth/auth.helper";
import { AuthService } from "@/services/auth/auth.service";
import { View, Image, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Button from "@/components/ui/button/Button";
import { getAuthUrl } from "@/config/api.config";
import { HorizontalRule } from "@/components/ui";
import Text from "@/components/ui/text/Text";
import { Feather } from "@expo/vector-icons";
import WebView from "react-native-webview";
import { useAuth } from "@/hooks/useAuth";
import { FC, useState } from "react";
import Accordion from "@/components/ui/accordion/Accordion";
import { data } from "@/shared/constants";

// +, выпадающий список, чтобы скрыть ненужную информацию
export const Auth: FC = () => {
  const [isWebView, setIsWebView] = useState(false);
  const { setUser } = useAuth();

  const handleLoginPress = () => {
    setIsWebView((value) => !value);
  };

  const handleNavigationStateChange = async (event: any) => {
    if (event.url && event.url.startsWith("com.vparse://callback")) {
      const url = new URL(event.url);
      const code = url.searchParams.get("code");
      if (code) {
        try {
          const response = await AuthService.exchangeCodeForToken(code);
          if (response.accessToken) {
            await saveUserToStorage(response); // save user & token
            setUser(response.user); // update context user
          }
        } catch (error) {
          console.error("Error exchanging code for token:", error);
        }
        setIsWebView(false);
      }
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {isWebView ? (
        <WebView
          source={{ uri: process.env.SERVER_DEV_URL + getAuthUrl("/Login") }}
          onNavigationStateChange={handleNavigationStateChange}
        />
      ) : (
        <LinearGradient
          colors={getAuthGradientColors()}
          start={{ x: 0.5, y: 0.8 }}
          end={{ x: 1, y: 1 }}
          style={{ flex: 1 }}
        >
          <ScrollView
            className="p-4 w-full h-full"
            contentContainerStyle={{ paddingBottom: 98 }}
          >
            <View>
              <View className="justify-between items-center flex-row">
                <View className="items-center flex-row">
                  <Feather
                    name={"heart"}
                    size={26}
                    color={getColor("white.400")}
                  />
                  <Text className="text-xl font-medium ml-2">Авторизация</Text>
                </View>
                <Text>ВПарсе v0.1</Text>
              </View>

              <HorizontalRule />

              {data.map((value, index) => {
                return (
                  <Accordion value={value} key={index} type={value.type} />
                );
              })}

              <View className="mt-2">
                <Image
                  className="w-full h-[250px] rounded-lg"
                  source={require("./Real.jpg")}
                  resizeMode="cover"
                />
              </View>
            </View>
          </ScrollView>

          <Button className="p-4 absolute bottom-0" onPress={handleLoginPress}>
            Войти
          </Button>
        </LinearGradient>
      )}
    </View>
  );
};
