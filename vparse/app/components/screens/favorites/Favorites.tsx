import MasonryList from "@react-native-seoul/masonry-list";
import { View, Image, Linking } from "react-native";
import { SmallButton, Text } from "@/components/ui";
import { useCallback, useState } from "react";
import { FavoriteService } from "@/services/favorite/favorite.service";
import { useFocusEffect } from "@react-navigation/native";
import { useAuth } from "@/hooks/useAuth";

const heights = [1.2, 1.4, 1.6, 1.8, 2];
const randomHeight = () => heights[Math.floor(Math.random() * heights.length)];

export const Favorites = () => {
  const [favorites, setFavorites] = useState<IUserBookmarkProps[]>([]);
  const [rerender, setRerender] = useState(false);

  const { user } = useAuth();

  const handleRemoveBookmark = (favoriteUserId: string) => {
    try {
      FavoriteService.removeFromFavorites({
        vkId: user!.vkId,
        favoriteUserId: favoriteUserId,
      });
      setRerender((value: boolean) => !value);
    } catch (error) {
      console.error("Ошибка при удалении пользователя из закладок: ", error);
    }
  };

  const handleSendUser = (userId: string) => {
    Linking.openURL("https://vk.com/id" + userId);
  };

  useFocusEffect(
    useCallback(() => {
      let isActive = true;

      const fetchBookmarks = async () => {
        try {
          const response = await FavoriteService.getFavorites(user!.vkId);

          if (response && response.length > 0) {
            // Декодирование URL каждого изображения
            const decodedFavorites = response.map(
              (favorite: { imageUrl: string }) => ({
                ...favorite,
                imageUrl: decodeURIComponent(favorite.imageUrl),
              })
            );

            setFavorites(decodedFavorites);
          }
        } catch (error) {
          console.error("Ошибка получения пользователей из закладок: ", error);
        }
      };

      fetchBookmarks();

      return () => {
        isActive = false;
      };
    }, [rerender])
  );
  return (
    <MasonryList
      style={{ flex: 1 }}
      data={favorites && favorites.length > 0 ? favorites : []}
      keyExtractor={(item) => item.id}
      numColumns={2} // кол-во столбцов сетки
      renderItem={({ item }) => {
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
              resizeMode="cover" // cover
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
                onPress={() => handleRemoveBookmark(user.favoriteUserId)}
                name={"close"}
                color="#111"
              />
              <SmallButton
                onPress={() => handleSendUser(user.favoriteUserId)}
                name={"mail-outline"}
                color="#111"
              />
            </View>
          </View>
        );
      }}
      ListFooterComponent={!favorites ? <ListFooterComponent /> : undefined}
    />
  );
};

function ListFooterComponent() {
  return (
    <View style={{ alignItems: "center", padding: 20 }}>
      <Text className="text-2xl font-medium">Пользователей нет</Text>
    </View>
  );
}

export interface IUserBookmarkProps {
  imageUrl: string;
  favoriteUserId: string;
}

// {users ? (
//   users.map(user => <UserComponent key={user.id} {...user} />)
// ) : (
//   <Loader />
// )}
