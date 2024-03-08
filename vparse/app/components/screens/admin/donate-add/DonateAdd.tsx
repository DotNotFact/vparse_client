import { View, Text, StyleSheet, TextInput } from "react-native";
import { useState } from "react";

export const DonateAdd = () => {
  const [vipId, setVipId] = useState("");
  const [role, setRole] = useState("");

  const handleAddDonate = () => {
    // AdminService.AddRole(vipId, role).catch((error: any) => {
    //   console.error("Ошибка при выдаче роли: ", error);
    // });
  };

  const options = {
    role: [
      { key: "0", value: "Базовая" },
      { key: "1", value: "Вип" },
      { key: "2", value: "Супер-Вип" },
      { key: "3", value: "Бесконечность" },
      { key: "4", value: "Админ" },
    ],
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text>Админ Панель</Text>
      </View>

      <View>
        <TextInput
          placeholder="ID пользователя"
          value={vipId}
          onChangeText={(text) => setVipId(text)}
          style={styles.input}
        />
      </View>

      <View>
        <Text>Роль пользователя</Text>

        {/* <SelectList
          placeholder="Выбрать"
          setSelected={(value: any) => setRole(value)}
          data={options.role}
        /> */}
      </View>

      {/* <BaseButton
        onPress={handleAddDonate}
        title={"Добавить"}
        justifyContent={"center"}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 11,
    gap: 22,
  },
  top: {
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderColor: "#000",
    borderRadius: 5,
    borderWidth: 1,
    fontSize: 18,
    padding: 5,
  },
});
