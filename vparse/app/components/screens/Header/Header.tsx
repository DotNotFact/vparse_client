import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { SmallButton } from "@/components/ui";
import { View, Image } from "react-native";
import { Text } from "@/components/ui";

export const Header = ({ filterShown, onPress }: any) => {
  // const navigation = useNavigation();
  // onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}

  return (
    <View className="justify-between flex-row w-full items-center align-center p-3">
      <View className="justify-center items-center py-2 flex-row">
        <View className="rounded-lg items-center justify-center">
          <Image
            source={{
              uri: "https://sun6-20.userapi.com/s/v1/ig2/6lITqLmCLXtZxcZmwL1n0oQrwENy6XEXy5kqjuCnNPs-w9HjiSJWHp71LFoCJEg3zLV9ScLIWBKB04yb0w3oDaq_.jpg?size=50x50&quality=95&crop=116,0,511,511&ava=1",
            }}
            style={{ width: hp(4.5), height: hp(4.5), resizeMode: "cover" }}
            className="rounded-lg"
          />
        </View>
        <Text className="text-xl font-semibold text-center ml-2">ВПарсе</Text>
      </View>
      {filterShown && <SmallButton name="filter" onPress={onPress} />}
    </View>
  );
};
