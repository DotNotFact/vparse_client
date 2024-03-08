import { getAuthGradientColors, getColor } from "@/config/colors.config";
import { saveUserToStorage } from "@/services/auth/auth.helper";
import { AuthService } from "@/services/auth/auth.service";
import { View, Image, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Button from "@/components/ui/button/Button";
import { getAuthUrl } from "@/config/api.config";
import { HorizontalRule } from "@/components/ui";
import Text from "@/components/ui/text/Text";
import WebView from "react-native-webview";
import { useAuth } from "@/hooks/useAuth";
import { FC, useState } from "react";
import { Feather } from "@expo/vector-icons";

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
            contentContainerStyle={{ paddingBottom: 86 }}
          >
            <View>
              <View className="gap-1">
                <View className="justify-between items-center flex-row">
                  <View className="items-center flex-row gap-2">
                    <Feather
                      name={"heart"}
                      size={26}
                      color={getColor("white.400")}
                    />
                    <Text className="text-xl font-bold">Авторизация</Text>
                  </View>
                  <Text>ВПарсе v0.1</Text>
                </View>

                <HorizontalRule />

                <View>
                  <Text className="text-xl font-bold">Добро пожаловать!</Text>

                  <Text className="mt-2 ml-2">
                    Здесь начинается твоё путешествие в мир новых знакомств и
                    интересных людей! Наслаждайся лёгким и быстрым способом
                    найти людей с похожими интересами.
                  </Text>
                </View>

                <HorizontalRule />

                <View>
                  <Text className="text-xl font-bold">
                    Присоединяйся одним нажатием!
                  </Text>

                  <Text className="mt-2 ml-2">
                    Нажми на кнопку ниже, чтобы войти с помощью твоей учётной
                    записи VK. Мы уважаем твою приватность и не публикуем ничего
                    без твоего разрешения. Безопасное и удобное использование —
                    наш приоритет.
                  </Text>
                </View>

                <HorizontalRule />

                <View>
                  <Text className="text-xl font-bold">
                    Начни новую главу общения
                  </Text>

                  <Text className="mt-2 ml-2">
                    Не упусти шанс сделать новые интересные знакомства уже
                    сегодня. Пусть каждый день будет шагом к новым впечатлениям
                    и замечательным людям в твоей жизни. Всё, что тебе нужно, —
                    это начать!
                  </Text>
                </View>
              </View>

              <HorizontalRule />

              <View className="mt-2">
                <Image
                  className="w-full h-[250px] rounded-lg"
                  source={require("./Real.jpg")}
                  resizeMode="cover"
                />
              </View>
            </View>
          </ScrollView>

          <Button
            className="py-3 px-4 absolute bottom-0"
            onPress={handleLoginPress}
          >
            Войти
          </Button>
        </LinearGradient>
      )}
    </View>
  );
};
