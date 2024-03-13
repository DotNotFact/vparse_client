import { BottomSheet, Button, Loader, Text } from "@/components/ui";
import Swiper from "react-native-deck-swiper";
import { FC, useEffect, useRef, useState } from "react";
import { Header } from "../Header/Header";
import DatesCard from "./DatesCard";
import { View } from "react-native";
import { Filter, IFilterProps } from "../filter/Filter";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { UserService } from "@/services/user/user.service";
import { useAuth } from "@/hooks/useAuth";
import { FavoriteService } from "@/services/favorite/favorite.service";

export interface IUserMainProps {
  id: string;
  imageUrl: string;
  firstName?: string;
  lastName?: string;
  bDate?: number;
  titlSign?: string;
  swipe?: string;
}

export const Home: FC = () => {
  const [users, setUsers] = useState<IUserMainProps[]>([]);
  const [filters, setFilter] = useState<IFilterProps>({});
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  const { user } = useAuth();

  const refRBSheet: any = useRef();

  useEffect(() => {
    loadUsers(true);
  }, [filters]);

  const loadUsers = async (reset = false) => {
    if (isLoading || !user) return;

    setIsLoading(true);

    if (reset) {
      setUsers([]);
      setPage(1);
    }

    try {
      console.log("page: " + page);

      const response = await UserService.Search({
        vkId: user.vkId,
        page: page,
        filters: filters,
      });
      if (response && response.items) {
        setUsers(response.items);
        setPage((prevPage) => prevPage + 1);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSwipeRight = async (cardIndex: number) => {
    if (!user) return;
    try {
      const imageUrl = encodeURIComponent(users[cardIndex].imageUrl);
      await FavoriteService.addToFavorites(
        user.vkId,
        users[cardIndex].id,
        imageUrl
      );
    } catch (error) {
      console.error("Ошибка добавления пользователя в закладки: ", error);
    }
  };

  const handleSwipeLeft = async () => {
    try {
      await UserService.AddSwipe();
    } catch (error) {
      console.error("Ошибка при свайпе: ", error);
    }
  };

  const handleSwipe = (cardIndex: number) => {
    if (cardIndex + 1 > users.length - 1) {
      loadUsers();
    }
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Header filterShown={true} onPress={() => refRBSheet.current.open()} />
      <View className="p-3" style={{ flex: 1 }}>
        {users.length !== 0 && !isLoading ? (
          <Swiper
            key={page}
            // cardIndex={index}
            // onSwiped={onSwiped}
            stackSize={3}
            cards={users}
            stackScale={10}
            animateCardOpacity
            stackSeparation={30}
            disableTopSwipe={true}
            disableBottomSwipe={true}
            animateOverlayLabelsOpacity
            backgroundColor="transparent"
            // onSwipedAll={() => setUsers(datesData)}
            renderCard={(item) => <DatesCard item={item} />}
            onSwipedLeft={handleSwipeLeft}
            onSwipedRight={(cardIndex) => handleSwipeRight(cardIndex)}
            cardVerticalMargin={0}
            cardHorizontalMargin={0}
            onSwiped={(cardIndex) => handleSwipe(cardIndex)}
            containerStyle={{
              position: "relative",
              flex: 1,
            }}
            cardStyle={{
              height: "100%",
              width: "100%",
            }}
            overlayLabels={{
              left: {
                title: "NOPE",
                style: {
                  label: {
                    backgroundColor: COLORS.nope,
                    color: "#fff",
                  },
                  wrapper: {
                    marginTop: 40,
                    marginLeft: -30,
                    alignItems: "flex-end",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                  },
                },
              },
              right: {
                title: "LIKE",
                style: {
                  label: {
                    backgroundColor: COLORS.like,
                    color: "#fff",
                  },
                  wrapper: {
                    marginTop: 40,
                    marginLeft: 30,
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                  },
                },
              },
            }}
          />
        ) : (
          // +, Добавить title в loader, Изменить верстку
          <View className="w-full h-full bg-[#f1f1f1]/10 rounded-lg p-3">
            <View style={{ flex: 1 }} className="justify-center items-center">
              <Loader />
              <View className="w-full mt-3">
                <Text className="text-center font-medium">
                  Пользователи временно закончились
                </Text>
                <Text className="text-center  text-[#cccc]">
                  {users.length === 0 &&
                    "Ты просмотрел всех, кто соответствует твоим критериям. Попробуй изменить настройки фильтра или зайди позже!"}
                </Text>
              </View>
            </View>
            <Button
              style={{ flex: 0 }}
              onPress={() => refRBSheet.current.open()}
            >
              Открыть фильтр
            </Button>
          </View>
        )}
      </View>
      <BottomSheet bottomSheetRef={refRBSheet}>
        <Filter />
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

const COLORS: any = {
  like: "#00eda6",
  nope: "#ff006f",
};
