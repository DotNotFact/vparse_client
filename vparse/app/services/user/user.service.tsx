import { IFilterProps } from "@/components/screens/home/filter/Filter";
import { getUserUrl } from "@/config/api.config";
import { $api } from "../api/api";

interface IPaginationSearchParams {
  vkId: string;
  page: number;
  filters: IFilterProps;
}

// : Promise<AxiosResponse>
export const UserService = {
  async Search({ vkId, page, filters }: IPaginationSearchParams) {
    const response = await $api.get(
      getUserUrl("/Search") + `?vkId=${vkId}&page=${page}`,
      {
        params: filters,
      }
    );
    return response.data;
  },

  async AddSwipe(vkId: string) {
    await $api.get(getUserUrl("/AddSwipe") + `?vkId=${vkId}`);
  },
};
