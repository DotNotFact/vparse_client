import { TouchableWithoutFeedback } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";
import { Image, View } from "react-native";
import { Text } from "@/components/ui";
import { IUserMainProps } from "./Home";

// const { width, height } = Dimensions.get("window");

// type Props = {
//   item: IUserMainProps;
//   handleClick: any;
// };

export default function DatesCard({ item, handleClick }: any) {
  const nameAndDate = `${item?.firstName || ""} ${item?.lastName ? `${item?.lastName}` : ""}${item?.bDate ? `, ${item?.bDate}` : ""}`;
  // const titleAndSwipe = `${(item?.isFriend === 0 && "Друг") || ""}${item?.swipe ? `, ${item?.swipe}` : ""}`;

  return (
    <View className="relative" style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={() => handleClick(item)}>
        <Image
          source={{ uri: item?.imageUrl }}
          className="rounded-lg absolute w-full h-full"
          resizeMode="cover"
        />
      </TouchableWithoutFeedback>

      <LinearGradient
        className="rounded-lg absolute bottom-0 w-full h-full"
        colors={["transparent", "rgba(0,0,0,0.1)"]}
        start={{ x: 0.5, y: 0.5 }}
        end={{ x: 0.5, y: 1 }}
      />

      <View className="absolute bottom-3 justify-start w-full items-start pl-4">
        <View className="flex-row justify-center items-center ">
          <Text className="text-2xl font-bold mr-2">{nameAndDate}</Text>
          <Feather size={25} color={"#fff"} name="heart" />
        </View>

        {/* Location */}
        {/* <View className="flex-row justify-center items-center ">
          <Text className="font-regular">{titleAndSwipe}</Text>
          <Text className="font-regular mr-2">{item?.swipe}</Text>
        </View> */}
      </View>
    </View>
  );
}
