import { EnumAsyncStorage, IAuthResponse } from "@/shared/types/auth.interface";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { deleteTokenStorage } from "./auth.helper";
import { getAuthUrl } from "@/config/api.config";
import { $api } from "../api/api";

export const AuthService = {
  async exchangeCodeForToken(code: string) {
    const response = await $api.post<IAuthResponse>(
      getAuthUrl("/ExchangeCodeForToken"),
      {
        code,
      }
    );
    return response.data;
  },
  async logout() {
    await deleteTokenStorage();
    await AsyncStorage.removeItem(EnumAsyncStorage.USER);
  },
};
