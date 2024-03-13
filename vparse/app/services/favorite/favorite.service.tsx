import { getFavoriteUrl } from "@/config/api.config";
import { AxiosResponse } from "axios";
import { $api } from "../api/api";

export const FavoriteService = {
  async getFavorites(vkId: string) {
    const response = await $api.get(
      getFavoriteUrl("/GetFavorites") + `?vkId=${vkId}`
    );
    return response.data;
  },

  async addToFavorites(vkId: string, favoriteUserId: string, imageUrl: string) {
    await $api.post(
      getFavoriteUrl("/AddToFavorites") +
        `?vkId=${vkId}&favoriteUserId=${favoriteUserId}&imageUrl=${imageUrl}`
    );
  },

  async removeFromFavorites(vkId: string, bookmarkUserId: string) {
    await $api.get(
      getFavoriteUrl("/RemoveFromFavorites") +
        `?vkId=${vkId}&bookmarkUserId=${bookmarkUserId}`
    );
  },
};
