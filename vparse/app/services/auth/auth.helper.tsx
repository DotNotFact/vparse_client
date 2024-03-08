import { deleteItemAsync, getItemAsync, setItemAsync } from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  ITokens,
  IAuthResponse,
  EnumSecureStore,
  EnumAsyncStorage,
} from "@/shared/types/auth.interface";
import { IUser } from "@/shared/types/user.interface";

export const getAccessToken = async () => {
  const accessToken = await getItemAsync(EnumSecureStore.ACCESS_TOKEN);
  return accessToken || null;
};

export const saveTokenStorage = async (token: string) => {
  await setItemAsync(EnumSecureStore.ACCESS_TOKEN, token);
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

export const setUserFromStorage = async (user: IUser) => {
  try {
    await AsyncStorage.setItem(EnumAsyncStorage.USER, JSON.stringify(user));
  } catch (e) {}
};

export const saveUserToStorage = async (data: IAuthResponse) => {
  await saveTokenStorage(data.accessToken);
  await setUserFromStorage(data.user);
};
