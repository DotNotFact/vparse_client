import { HorizontalRule, Text } from "@/components/ui";
import { useState } from "react";
import { Switch, TextInput, TouchableOpacity, View } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { ScrollView } from "react-native-gesture-handler";

export const Filter = () => {
  const [filter, setFilter] = useState<any>({}); // IFilterProps>({});

  const handleFilterChange = (key: any, value: any) => {
    const newFilter = { ...filter, [key]: value };
    setFilter(newFilter);
  };

  const toggleApplyFilters = () => {
    // navigation.navigate("Main", { filter: filter });
  };

  const options = {
    sex: [
      { key: "0", value: "Любой" },
      { key: "1", value: "Женский" },
      { key: "2", value: "Мужской" },
    ],
    sort: [
      { key: "0", value: "Популярности" },
      { key: "1", value: "Дате регистрации" },
    ],
    status: [
      { key: "0", value: "Любое" }, // Нет
      { key: "1", value: "не женат (не замужем)" },
      { key: "2", value: "встречается" },
      { key: "3", value: "помолвлен(а)" },
      { key: "4", value: "женат (замужем)" },
      { key: "5", value: "всё сложно" },
      { key: "6", value: "в активном поиске" },
      { key: "7", value: "влюблен(а)" },
      { key: "8", value: "в гражданском браке" },
    ],
    fromList: [
      { key: "0", value: "Всех" }, // Нет
      { key: "friends", value: "Друзей" },
      { key: "subscriptions", value: "Друзей и подписок" },
    ],
  };

  return (
    <ScrollView>
      <View className="p-3" style={{ flex: 1 }}>
        <View className="justify-center items-center">
          <Text className="text-[#111] text-xl font-semibold">Фильтры</Text>
        </View>

        <HorizontalRule />

        <View className="gap-3">
          <Text>Критерии поиска</Text>
          <View className="gap-2">
            <Text>Возраст</Text>

            <View
              style={{
                justifyContent: "space-between",
                flexDirection: "row",
                alignItems: "center",
                width: "100%",
              }}
            >
              <TextInput
                className="border-[#111] border-2 rounded-lg p-1 m-1 w-full h-full"
                placeholder="с"
                maxLength={2}
                keyboardType="numeric"
                value={filter.age_from}
                onChangeText={(text) => handleFilterChange("age_from", text)}
              />

              <HorizontalRule />

              <TextInput
                className="border-[#111] border-2 rounded-lg p-1 m-1 w-full h-full"
                placeholder="по"
                keyboardType="numeric"
                value={filter.age_to}
                maxLength={2}
                onChangeText={(text) => handleFilterChange("age_to", text)}
              />
            </View>

            <View className="gap-2">
              <Text>Пол</Text>

              <SelectList
                placeholder="Выбрать"
                setSelected={(value: any) => handleFilterChange("sex", value)}
                data={options.sex}
              />
            </View>

            <View className="gap-2">
              <Text>Сортировать по</Text>
              <SelectList
                placeholder="Выбрать"
                setSelected={(value: any) => handleFilterChange("sort", value)}
                data={options.sort}
              />
            </View>

            <View className="gap-2">
              <Text>Семейное положение</Text>

              <SelectList
                placeholder="Выбрать"
                setSelected={(value: any) =>
                  handleFilterChange("status", value)
                }
                data={options.status}
              />
            </View>

            <View className="gap-2">
              <Text>Осуществить поиск среди</Text>

              <SelectList
                placeholder="Выбрать"
                setSelected={(value: any) =>
                  handleFilterChange("from_list", value)
                }
                data={options.fromList}
              />
            </View>
          </View>

          <Text>Дополнительно</Text>
          <View>
            <View className="justify-center items-center flex-row p-3 gap-2">
              <Text>Только с фото</Text>

              <Switch
                onValueChange={(newValue) => {
                  handleFilterChange("has_photo", newValue ? "1" : "0");
                }}
                value={filter.has_photo === "1"}
              />
            </View>

            <View className="justify-center items-center flex-row p-3 gap-2">
              <Text>Онлайн</Text>
              <Switch
                onValueChange={(newValue) => {
                  handleFilterChange("online", newValue ? "1" : "0");
                }}
                value={filter.online === "1"}
              />
            </View>

            {/*

           <View className="justify-center items-center flex-row p-3 gap-2">
            <Text style={currentTextStyles.smallBlackText}>
              Открытые сообщения
            </Text>

            <Switch
              onValueChange={(newValue) => {
                handleFilterChange(
                  "can_write_private_message",
                  newValue ? "1" : "0"
                );
              }}
              value={filter.can_write_private_message === "1"}
            />
          </View>

          <View className="justify-center items-center flex-row p-3 gap-2">
            <Text style={currentTextStyles.smallBlackText}>
              Добавление в друзья
            </Text>

            <Switch
              onValueChange={(newValue) => {
                handleFilterChange(
                  "can_send_friend_request",
                  newValue ? "1" : "0"
                );
              }}
              value={filter.can_send_friend_request === "1"}
            />
          </View>

          <View className="justify-center items-center flex-row p-3 gap-2">
            <Text style={currentTextStyles.smallBlackText}>
              Просмотр постов
            </Text>

            <Switch
              onValueChange={(newValue) => {
                handleFilterChange("can_see_all_posts", newValue ? "1" : "0");
              }}
              value={filter.can_see_all_posts === "1"}
            />
          </View> 
         
          <Text style={currentTextStyles.smallBlueText}>Исключить если</Text>
          
          */}

            {/* 
          
          Город и страна

          <View className="gap-2">
            <Text style={currentTextStyles.smallBlackText}>Общие друзья</Text>

            <Switch
              onValueChange={(newValue) => {
                handleFilterChange("is_friend", newValue ? "1" : "0");
              }}
              value={filter.is_friend === "1"}
            />
          </View>
          
          */}
          </View>

          <TouchableOpacity
            className="bg-[#121212] rounded-lg items-center w-full p-3"
            onPress={toggleApplyFilters}
            activeOpacity={0.8}
          >
            <Text>Применить</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
