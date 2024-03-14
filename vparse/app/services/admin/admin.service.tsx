import { IRoleManagerProps } from "@/components/screens/admin/role-manager/RoleManager";
import { getAdminUrl } from "@/config/api.config";
import { $api } from "../api/api";

export const AdminService = {
  async getPromocode(props: IRoleManagerProps) {
    await $api.get(getAdminUrl("/GetPromocode"), {
      params: props,
    });
  },
};
