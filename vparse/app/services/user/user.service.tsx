import { getUserUrl } from "@/config/api.config";
import { $api } from "../api/api";
import { AxiosResponse } from "axios";
import { IFilterProps } from "@/components/screens/filter/Filter";

interface IPaginationSearchParams {
  vkId: string;
  page: number;
  filters: IFilterProps;
}

export const UserService = {
  // : Promise<AxiosResponse>
  async Search({ vkId, page, filters }: IPaginationSearchParams) {
    const response = await $api.get(
      getUserUrl("/Search") + `?vkId=${vkId}&page=${page}`,
      {
        params: filters,
      }
    );
    return response.data;
  },

  async AddSwipe(): Promise<AxiosResponse> {
    return await $api.get(getUserUrl("/AddSwipe"));
  },
};
