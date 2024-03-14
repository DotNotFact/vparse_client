import { SelectList } from "react-native-dropdown-select-list";
import { Button, Text } from "@/components/ui";
import { View, TextInput } from "react-native";
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";
import { AdminService } from "@/services/admin/admin.service";

export interface IRoleManagerProps {
  userId: string;
  role: string;
  time: string;
}

export const RoleManager = () => {
  const [roleManager, setRoleManager] = useState<IRoleManagerProps | null>(
    null
  );
  const { user } = useAuth();

  const handleAddDonate = () => {
    if (roleManager?.userId && roleManager.role) {
      try {
        AdminService.getPromocode(roleManager);
      } catch (e) {
        console.log(e);
      }
    }
  };

  const handleChange = (key: keyof IRoleManagerProps, value: string) => {
    setRoleManager((prev: any) => ({ ...prev, [key]: value }));
  };

  return (
    <View className="flex-1 p-3">
      <View className="justify-center items-center">
        <Text className="text-2xl font-medium">Админ Панель</Text>
      </View>

      <View className="my-5">
        <TextInput
          maxLength={11}
          keyboardType="numeric"
          value={roleManager?.userId}
          placeholderTextColor="#cccc"
          placeholder="ID пользователя"
          onChangeText={(value) => handleChange("userId", value)}
          className="border-[#f1f1f1] border-2 text-lg text-white p-2 rounded-lg"
        />
      </View>

      <View className="my-2">
        <Text className="m-2">Роль пользователя</Text>
        <SelectList
          setSelected={(value: string) => handleChange("role", value)}
          data={options.role}
          {...baseSelectListStyle}
        />
      </View>

      <View className="my-2">
        <Text className="m-2">Время подписки</Text>
        <SelectList
          setSelected={(value: string) => handleChange("time", value)}
          data={options.time}
          {...baseSelectListStyle}
        />
      </View>

      <Button onPress={handleAddDonate} className={"justify-center mt-5"}>
        Добавить
      </Button>
    </View>
  );
};

const baseSelectListStyle = {
  search: false,
  placeholder: "Выбрать",
  boxStyles: {
    borderColor: "#f1f1f1",
    color: "#cccc",
    lineHeight: 28,
    fontSize: 18,
  },
  dropdownStyles: {
    borderColor: "#f1f1f1",
  },
  boxSelectListStyle: {
    borderColor: "#f1f1f1",
  },
  inputStyles: {
    color: "#cccc",
  },
  dropdownTextStyles: {
    color: "#cccc",
  },
};

const options = {
  role: [
    { key: "0", value: "Standart" },
    { key: "1", value: "VIP" },
    { key: "2", value: "Super-VIP" },
    { key: "3", value: "Premium" },
    { key: "3", value: "Elite" },
    { key: "4", value: "Admin" },
  ],
  time: [
    { key: "0", value: "1 день" },
    { key: "1", value: "3 дня" },
    { key: "2", value: "7 дней" },
    { key: "3", value: "14 дней" },
    { key: "4", value: "30 дней" },
    { key: "5", value: "60 дней" },
    { key: "6", value: "90 дней" },
    { key: "7", value: "1 год" },
  ],
};
