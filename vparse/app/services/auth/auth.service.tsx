import AsyncStorage from "@react-native-async-storage/async-storage";
import { EnumAsyncStorage, ITokens } from "@/shared/types/auth.interface";
import { getAuthUrl } from "@/config/api.config";
import { $api } from "../api/api";

import {
  deleteTokenStorage,
  getAccessToken,
  saveTokenStorage,
} from "./auth.helper";

export const AuthService = {
  async login() {
    return await $api.get(getAuthUrl(`/login`));
  },
  async checkProtectedAccessToken() {
    try {
      const accessToken = await getAccessToken(); // Функция для получения access токена из хранилища

      if (!accessToken) {
        throw new Error("Access Token is missing");
      }

      const response: ITokens = await $api.get(
        getAuthUrl(`/checkprotectedaccesstoken`)
      );

      if (response.accessToken) {
        saveTokenStorage(response);
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error("Error checking protected resource access", error);
      return false;
    }
  },
  async logout() {
    await deleteTokenStorage();
    await AsyncStorage.removeItem(EnumAsyncStorage.USER);
  },
};
