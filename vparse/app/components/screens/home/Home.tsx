import { BottomSheet, Button, Loader, Text } from "@/components/ui";
import Swiper from "react-native-deck-swiper";
import { FC, useEffect, useRef, useState } from "react";
import { Header } from "../Header/Header";
import DatesCard from "./DatesCard";
import { View } from "react-native";
import { Filter } from "../filter/Filter";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { UserService } from "@/services/user/user.service";
import { IFilterProps } from "../favorites/Favorites";
import { useAuth } from "@/hooks/useAuth";

export interface IUserMainProps {
  id: number;
  imageUrl: string;
  firstName?: string;
  lastName?: string;
  bDate?: number;
  titlSign?: string;
  swipe?: string;
}

export interface IUserBookmarkProps {
  id: string;
  imageUrl: string;
  bookUserId: string;
}

const pageSize = 10;

export const Home: FC = () => {
  const [users, setUsers] = useState<IUserMainProps[]>([]);
  const [filters, setFilter] = useState<IFilterProps>({});
  const [page, setPage] = useState(0);

  const { user } = useAuth();

  const usersLengthRef = useRef(users.length);
  const isLoadingRef = useRef(false);

  const refRBSheet: any = useRef();

  useEffect(() => {
    resetState();
    loadUsers();
  }, [filters]);

  const resetState = () => {
    isLoadingRef.current = false;
    usersLengthRef.current = 0;
    setUsers([]);
    setPage(0);
  };

  usersLengthRef.current = users.length;

  const loadUsers = async () => {
    if (isLoadingRef.current || usersLengthRef.current > 5) return;

    isLoadingRef.current = true;

    if (user) {
      const { vkId } = user;

      try {
        const response = await UserService.Search({
          vkId,
          page,
          pageSize,
          filters,
        });
        if (response && response.items) {
          setUsers((prevUsers: any) => [...prevUsers, ...response.items]);
          setPage((prevPage) => prevPage + 1);
        }
      } catch (e) {
        console.log(e);
      } finally {
        isLoadingRef.current = false;
      }
    }
  };

  const handleSwipeRight = (cardIndex: any) => {
    try {
      // const imageUrl = encodeURIComponent(users[0].photo_400_orig.imageUrl);
      // FavoriteService.addBookmark(users[0].id, imageUrl);
    } catch (error) {
      console.error("Ошибка добавления пользователя в закладки: ", error);
    }
    console.log(cardIndex);
  };

  const handleSwipeLeft = async (cardIndex: any) => {
    // try {
    //   await UserService.AddSwipe();
    // } catch (error) {
    //   console.error("Ошибка при свайпе: ", error);
    // }
    // if (users.length <= 5 && !isLoadingRef.current) {
    //   loadUsers();
    // }
    console.log(cardIndex);
  };

  console.log(users.length);

  // +, сократить
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Header filterShown={true} onPress={() => refRBSheet.current.open()} />
      <View className="p-3 flex-1">
        {users.length > 0 ? (
          <Swiper
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
            onSwipedLeft={(cardIndex) => handleSwipeLeft(cardIndex)}
            onSwipedRight={(cardIndex) => handleSwipeRight(cardIndex)}
            cardVerticalMargin={0}
            cardHorizontalMargin={0}
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
          <View className="w-full h-full m-auto bg-[#f1f1f1]/10 rounded-lg p-3 justify-center items-center">
            <View className="mt-auto">
              <Loader />
              <View className="w-full mt-3">
                <Text className="text-center font-medium">
                  Пользователи временно закончились
                </Text>
                <Text className="text-center  text-[#cccc]">
                  Ты просмотрел всех, кто соответствует твоим критериям.
                  Попробуй изменить настройки фильтра или зайди позже!
                </Text>
              </View>
            </View>
            <Button onPress={loadUsers} className="mt-auto">
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
