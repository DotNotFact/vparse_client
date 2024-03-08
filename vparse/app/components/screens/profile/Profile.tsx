import { View, Image } from "react-native";
import { FC } from "react";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui";
import { AuthService } from "@/services/auth/auth.service";
import { Text } from "@/components/ui";

export const Profile: FC = () => {
  const { user, setUser } = useAuth();

  const handleLogout = () => {
    AuthService.logout();
    setUser(null);
  };

  return (
    <View className="p-3" style={{ flex: 1 }}>
      <View className="w-full justify-center items-center">
        <Text className="text-2xl font-semibold">
          {user?.firstName} {user?.lastName}
        </Text>
        <Text className="text-[#cccc]">ваш аккаунт</Text>
      </View>

      <View className="mt-3 mb-5">
        <Image
          className="w-full h-[390px] rounded-lg"
          alt="photoUrlOriginal"
          source={{ uri: user?.photoUrlOriginal }}
          resizeMode="cover"
        />
      </View>

      <View className="w-full">
        <Button onPress={handleLogout}>Выход</Button>
      </View>
    </View>
  );
};
