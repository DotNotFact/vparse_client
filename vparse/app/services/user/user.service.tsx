import { IFilterProps } from "@/components/screens/favorites/Favorites";
import { getUserUrl } from "@/config/api.config";
import { $api } from "../api/api";
import { AxiosResponse } from "axios";

interface IPaginationSearchParams {
  vkId: string;
  page: number;
  pageSize: number;
  filters: IFilterProps;
}

export const UserService = {
  // : Promise<AxiosResponse>
  async Search({ vkId, page, pageSize, filters }: IPaginationSearchParams) {
    const response = await $api.get(
      getUserUrl("/Search") + `?vkId=${vkId}&page=${page}&pageSize=${pageSize}`,
      {
        params: filters,
      }
    );
    return response.data;
  },

  async AddSwipe(): Promise<AxiosResponse> {
    return await $api.get(getUserUrl("/addswipe"));
  },

  async GetProfile(): Promise<AxiosResponse> {
    return await $api.get(getUserUrl("/getprofile"));
  },
};
