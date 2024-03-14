import { getFavoriteUrl } from "@/config/api.config";
import { $api } from "../api/api";

export const FavoriteService = {
  async getFavorites(vkId: string) {
    const response = await $api.get(
      getFavoriteUrl("/GetFavorites") + `?vkId=${vkId}`
    );
    return response.data;
  },

  async addToFavorites(props: IAddToFavorites) {
    await $api.post(getFavoriteUrl("/AddToFavorites"), props);
  },

  async removeFromFavorites(props: IRemoveFromFavorites) {
    await $api.post(getFavoriteUrl("/RemoveFromFavorites"), props);
  },
};

interface IAddToFavorites {
  vkId: string;
  imageUrl: string;
  favoriteUserId: number;
}

interface IRemoveFromFavorites {
  vkId: string;
  favoriteUserId: string;
}
