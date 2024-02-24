import { deleteItemAsync, getItemAsync, setItemAsync } from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  ITokens,
  IAuthResponse,
  EnumSecureStore,
  EnumAsyncStorage,
} from "@/shared/types/auth.interface";

export const getAccessToken = async () => {
  const accessToken = await getItemAsync(EnumSecureStore.ACCESS_TOKEN);
  return accessToken || null;
};

export const saveTokenStorage = async (data: ITokens) => {
  await setItemAsync(EnumSecureStore.ACCESS_TOKEN, data.accessToken);
};

export const deleteTokenStorage = async () => {
  await deleteItemAsync(EnumSecureStore.ACCESS_TOKEN);
};

export const getUserFromStorage = async () => {
  try {
    return JSON.parse(
      (await AsyncStorage.getItem(EnumAsyncStorage.USER)) || "{}"
    );
  } catch (e) {
    return null;
  }
};

export const saveUserToStorage = async (data: IAuthResponse) => {
  await saveTokenStorage(data);
  try {
    await AsyncStorage.setItem(
      EnumAsyncStorage.USER,
      JSON.stringify(data.user)
    );
  } catch (e) {}
};
