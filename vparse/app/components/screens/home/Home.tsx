import { BottomSheet, Button, Loader, Text } from "@/components/ui";
import Swiper from "react-native-deck-swiper";
import { FC, useEffect, useRef, useState } from "react";
import { Header } from "../Header/Header";
import DatesCard from "./DatesCard";
import { View } from "react-native";
import { Filter, IFilterProps } from "./filter/Filter";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { UserService } from "@/services/user/user.service";
import { useAuth } from "@/hooks/useAuth";
import { FavoriteService } from "@/services/favorite/favorite.service";

export interface IUserMainProps {
  // Базовые поля
  id: number;
  trackCode: string;
  firstName: string;
  lastName: string;
  isClosed: boolean;
  canAccessClosed: boolean;
  canWritePrivateMessage: number;
  canSendFriendRequest: number;
  canSeeAllPosts: number;
  commonCount: number;

  // Опциональные поля A-I (примеры, не все поля перечислены)
  // activities?: string; // «Деятельность» из профиля
  // about?: string; // «О себе» из профиля
  // blacklisted?: number; // Я в черном списке?
  // blacklistedByMe?: number; // Кто-то в черном списке у тебя?

  // city?: number | string; // город
  // country?: number | string; // страна
  // homeTown?: string; // Название родного города

  // contacts?: string; // номер телефона
  // hasMobile?: number; // известен ли номер телефона
  // hasPhoto?: number; // установил ли пользователь фотографию

  // counters?: object; // Количество различных объектов (users.get)
  // followersCount?: number; // Количество подписчиков
  // friendStatus?: number; // Статус дружбы с пользователем
  // isFavorite?: number; // есть ли пользователь в закладках у текущего пользователя

  // Дата рождения
  bDate?: string;

  isFriend?: number;

  // Опциональные поля L-R (примеры, не все поля перечислены)
  // lastSeen?: number; // Время последнего посещения
  // online?: number; // Онлайн ли (online_mobile & online_app?)
  // lists?: string; // Разделенные запятой идентификаторы списков друзей (friends.get)
  // relation?: number; // Семейное положение

  imageUrl: string;

  // Опциональные поля S-W (примеры, не все поля перечислены)
  // screenName?: string; // Короткое имя страницы
  // sex?: number; // Пол
  // status?: string; // Статус
  // trending?: number; // "огонёк"
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
    if (isLoading) return;

    setIsLoading(true);

    if (reset) {
      setUsers([]);
      setPage(1);
    }

    try {
      const response = await UserService.Search({
        vkId: user!.vkId,
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
    try {
      const imageUrl = encodeURIComponent(users[cardIndex].imageUrl);
      await FavoriteService.addToFavorites({
        vkId: user!.vkId,
        favoriteUserId: users[cardIndex].id,
        imageUrl: imageUrl,
      });
    } catch (error) {
      console.error("Ошибка добавления пользователя в закладки: ", error);
    }
  };

  const handleSwipeLeft = async () => {
    try {
      await UserService.AddSwipe(user!.vkId);
    } catch (error) {
      console.error("Ошибка при свайпе: ", error);
    }
  };

  const handleSwipe = (cardIndex: number) => {
    if (cardIndex + 1 > users.length - 1) {
      loadUsers();
    }
  };

  // +, full update Swiper
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Header filterShown={true} onPress={() => refRBSheet.current.open()} />
      <View className="p-3" style={{ flex: 1 }}>
        {users.length !== 0 && !isLoading ? (
          <Swiper
            // cardIndex={index}
            // onSwiped={onSwiped}
            // onSwipedAll={() => setUsers(datesData)}
            key={page}
            cards={users}
            renderCard={(item) => <DatesCard item={item} />}
            onSwipedLeft={handleSwipeLeft}
            onSwipedRight={(cardIndex) => handleSwipeRight(cardIndex)}
            onSwiped={(cardIndex) => handleSwipe(cardIndex)}
            {...SwiperConstant}
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

const ChoiceOverlayLabels = {
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
};

const SwiperConstant = {
  stackSize: 3,
  stackScale: 10,
  animateCardOpacity: false,
  stackSeparation: 30,
  disableTopSwipe: true,
  disableBottomSwipe: true,
  animateOverlayLabelsOpacity: false,
  backgroundColor: "transparent",
  cardVerticalMargin: 0,
  cardHorizontalMargin: 0,
  containerStyle: {
    position: "relative",
    flex: 1,
  },
  cardStyle: {
    height: "100%",
    width: "100%",
  },
  overlayLabels: {
    ChoiceOverlayLabels,
  },
};
