import { IRoleManagerProps } from "@/components/screens/admin/role-manager/RoleManager";
import { getAdminUrl } from "@/config/api.config";
import { $api } from "../api/api";

export const AdminService = {
  async addRole(props: IRoleManagerProps) {
    await $api.get(getAdminUrl("/AddRole"), {
      params: props,
    });
  },
};
