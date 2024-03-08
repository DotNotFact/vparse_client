import { View, Text, StyleSheet, Linking } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { HorizontalRule } from "@/components/ui";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "@/components/ui";

export const DonateInfo = () => {
  const handleLink = () => {
    // Linking.openURL(`tg`);
  };

  return (
    <View style={style.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={{ alignSelf: "center", marginBottom: 22, fontSize: 28 }}>
          Информация о Донате
        </Text>
        <View style={style.box}>
          <View style={style.boxTop}>
            <Text>Базовый</Text>
            <Ionicons name="star" size={22} />
          </View>
          <HorizontalRule />
          <View style={style.boxMain}>
            <Text>Тариф</Text>
            <Text>• 100 свайпов/день</Text>
            <Text>• 10 закладок</Text>
          </View>
          <View style={style.boxBottom}>
            <Text>Бесплатно</Text>
            <Button onPress={handleLink}>Купить</Button>
          </View>
        </View>

        <View style={style.box}>
          <View style={style.boxTop}>
            <Text>Вип</Text>
            <Ionicons name="star-outline" size={22} />
          </View>
          <HorizontalRule />
          <View style={style.boxMain}>
            <Text>Тариф</Text>
            <Text>• 200 свайпов/день</Text>
            <Text>• 20 закладок</Text>
          </View>
          <View style={style.boxBottom}>
            <Text>300 рублей</Text>
            <Button onPress={handleLink}>Купить</Button>
          </View>
        </View>

        <View style={style.box}>
          <View style={style.boxTop}>
            <Text>Супер-Вип</Text>
            <Ionicons name="star-outline" size={22} />
          </View>
          <HorizontalRule />
          <View style={style.boxMain}>
            <Text>Тариф</Text>
            <Text>• 400 свайпов/день</Text>
            <Text>• 40 закладок</Text>
          </View>
          <View style={style.boxBottom}>
            <Text>800 рублей</Text>
            <Button onPress={handleLink}>Купить</Button>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    padding: 11,
  },
  box: {
    flexDirection: "column",
    borderColor: "#000",
    marginBottom: 15,
    borderRadius: 11,
    borderWidth: 1,
    height: 240,
    padding: 11,
  },
  boxTop: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  boxMain: {
    flex: 1,
    gap: 5,
  },
  boxText: {
    fontSize: 16,
  },
  boxBottom: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
});
