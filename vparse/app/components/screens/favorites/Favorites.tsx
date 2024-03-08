import MasonryList from "@react-native-seoul/masonry-list";
import { View, Text, Image, Linking } from "react-native";
import { SmallButton } from "@/components/ui";
import { useState } from "react";

const heights = [1.2, 1.4, 1.6, 1.8, 2];
const randomHeight = () => heights[Math.floor(Math.random() * heights.length)];

export const Favorites = () => {
  const [users, setUsers] = useState<IUserBookmarkProps[]>([
    {
      id: "1",
      bookUserId: "1",
      imageUrl:
        "https://habrastorage.org/r/w390/getpro/habr/upload_files/a3b/817/c8e/a3b817c8ea603fd0a8e9a0016e72fe5a.jpg",
    },
    {
      id: "2",
      bookUserId: "2",
      imageUrl:
        "https://habrastorage.org/r/w390/getpro/habr/upload_files/a3b/817/c8e/a3b817c8ea603fd0a8e9a0016e72fe5a.jpg",
    },
    {
      id: "3",
      bookUserId: "3",
      imageUrl:
        "https://habrastorage.org/r/w390/getpro/habr/upload_files/a3b/817/c8e/a3b817c8ea603fd0a8e9a0016e72fe5a.jpg",
    },
    {
      id: "4",
      bookUserId: "4",
      imageUrl:
        "https://habrastorage.org/r/w390/getpro/habr/upload_files/a3b/817/c8e/a3b817c8ea603fd0a8e9a0016e72fe5a.jpg",
    },
    {
      id: "5",
      bookUserId: "5",
      imageUrl:
        "https://habrastorage.org/r/w390/getpro/habr/upload_files/a3b/817/c8e/a3b817c8ea603fd0a8e9a0016e72fe5a.jpg",
    },
  ]);
  const [rerender, setRerender] = useState(false);

  const handleRemoveBookmark = (bookmarkUserId: string) => {
    try {
      // BookmarkService.removeBookmark(bookmarkUserId).then(() => {
      //   setRerender((value: boolean) => !value);
      // });
    } catch (error) {
      console.error("Ошибка при удалении пользователя из закладок: ", error);
    }
  };

  const handleSendUser = (userId: string) => {
    Linking.openURL("https://vk.com/id" + userId);
  };

  // useFocusEffect(
  //   useCallback(() => {
  //     let isActive = true;

  //     const fetchBookmarks = async () => {
  //       try {
  //         // const response = await BookmarkService.getAllBookmarks();
  //         if (isActive) {
  //           //   setUsers(response.data);
  //         }
  //       } catch (error) {
  //         console.error("Ошибка получения пользователей из закладок: ", error);
  //       }
  //     };

  //     fetchBookmarks();

  //     return () => {
  //       isActive = false;
  //     };
  //   }, [rerender])
  // );

  return (
    <MasonryList
      style={{ flex: 1 }}
      data={users}
      keyExtractor={(item) => item.id}
      numColumns={2} // кол-во столбцов сетки
      renderItem={({ item }: { item: any }) => {
        const user = item as IUserBookmarkProps;
        return (
          <View style={{ margin: 5, borderRadius: 7, borderWidth: 1 }}>
            <Image
              style={{
                width: "100%",
                aspectRatio: 1 / randomHeight(),
                borderRadius: 5,
                position: "relative",
              }} // Пример использования аспектного соотношения для динамической высоты
              resizeMode="stretch" // cover
              source={{ uri: user.imageUrl }}
            />
            <View
              style={{
                justifyContent: "space-between",
                backgroundColor: "white",
                flexDirection: "row",
                position: "absolute",
                borderRadius: 7,
                width: "100%",
                padding: 10,
                bottom: 0,
              }}
            >
              <SmallButton
                onPress={() => handleRemoveBookmark(user.bookUserId)}
                name={"close"}
                color="#111"
              />
              <SmallButton
                onPress={() => handleSendUser(user.bookUserId)}
                name={"mail-outline"}
                color="#111"
              />
            </View>
          </View>
        );
      }}
      ListFooterComponent={users.length === 0 ? ListFooterComponent : null}
    />
  );
};

function ListFooterComponent() {
  return (
    <View style={{ alignItems: "center", padding: 20 }}>
      <Text>Пользователей нет</Text>
    </View>
  );
}

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
export interface IUserBookmarkProps {
  id: string;
  imageUrl: string;
  bookUserId: string;
}
