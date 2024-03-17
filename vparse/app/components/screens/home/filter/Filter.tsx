import { Switch, TextInput, TouchableOpacity, View } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { ScrollView } from "react-native-gesture-handler";
import { HorizontalRule, Text } from "@/components/ui";
import { getColor } from "@/config/colors.config";
import { useState } from "react";

export interface IFilterProps {
  // Сервер
  count?: number;
  offset?: number;

  // Критерии поиска
  age_from?: string;
  age_to?: string;
  sex?: string;
  sort?: string;
  status?: string;
  from_list?: string;

  // Дополнительно
  has_photo?: string;
  online?: string;
  // can_write_private_message: string;
  // can_send_friend_request: string;
  // can_see_all_posts: string;
  // common_count: string;
  //
  fields?: string;
  //
  q?: string;
  city?: number;
  city_id?: number;
  country?: number;
  country_id?: number;
  hometown?: string;
  university_country?: number;
  university?: number;
  university_year?: number;
  university_faculty?: number;
  university_chair?: number;
  birth_day?: number;
  birth_month?: number;
  birth_year?: number;
  school_country?: number;
  school_city?: number;
  school_class?: number;
  school?: number;
  school_year?: number;
  religion?: string;
  company?: string;
  position?: string;
  group_id?: number;
  screen_ref?: string;
}

export const Filter = ({ onApplyFilters }: any) => {
  const [filter, setFilter] = useState<IFilterProps>({}); // IFilterProps>({});

  const handleFilterChange = (key: any, value: any) => {
    const newFilter = { ...filter, [key]: value };
    setFilter(newFilter);
  };

  const toggleApplyFilters = () => {
    onApplyFilters(filter);
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
    <ScrollView style={{ backgroundColor: getColor("gray") }}>
      <View className="p-3" style={{ flex: 1 }}>
        <View className="justify-center items-center">
          <Text className="text-[#111] text-xl font-medium">Фильтры</Text>
        </View>

        <HorizontalRule />

        <View className="p-3">
          <Text>Критерии поиска</Text>
          <View className="p-3">
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

            <View className="p-3">
              <Text>Пол</Text>

              <SelectList
                setSelected={(value: any) => handleFilterChange("sex", value)}
                data={options.sex}
                {...baseSelectListStyle}
              />
            </View>

            <View className="gap-2">
              <Text>Сортировать по</Text>
              <SelectList
                setSelected={(value: any) => handleFilterChange("sort", value)}
                data={options.sort}
                {...baseSelectListStyle}
              />
            </View>

            <View className="gap-2">
              <Text>Семейное положение</Text>

              <SelectList
                setSelected={(value: any) =>
                  handleFilterChange("status", value)
                }
                data={options.status}
                {...baseSelectListStyle}
              />
            </View>

            <View className="gap-2">
              <Text>Осуществить поиск среди</Text>

              <SelectList
                setSelected={(value: any) =>
                  handleFilterChange("from_list", value)
                }
                data={options.fromList}
                {...baseSelectListStyle}
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

// +-+- еще есть
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
