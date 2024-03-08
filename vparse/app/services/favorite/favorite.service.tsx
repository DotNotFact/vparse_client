import { getFavoriteUrl } from "@/config/api.config";
import { AxiosResponse } from "axios";
import { $api } from "../api/api";

export const FavoriteService = {
  async getAllBookmarks(): Promise<AxiosResponse> {
    return await $api.get(getFavoriteUrl("/GetFavorites"));
  },

  async addBookmark(
    bookmarkUserId: string,
    imageUrl: string
  ): Promise<AxiosResponse> {
    return await $api.get(
      getFavoriteUrl("/AddFavorite") +
        `?bookmarkUserId=${bookmarkUserId}&imageUrl=${imageUrl}`
    );
  },

  async removeBookmark(bookmarkUserId: string): Promise<AxiosResponse> {
    return await $api.get(
      getFavoriteUrl("/RemoveFavorite") + `?&bookmarkUserId=${bookmarkUserId}`
    );
  },
};
