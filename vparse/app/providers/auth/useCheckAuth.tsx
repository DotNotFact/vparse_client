import { getAccessToken } from "@/services/auth/auth.helper";
import { AuthService } from "@/services/auth/auth.service";
import { useAuth } from "@/hooks/useAuth";
import { useEffect } from "react";

export const useCheckAuth = (routeName?: string) => {
  const { user, setUser } = useAuth();

  useEffect(() => {
    const verifyAccessToken = async () => {
      const accessToken = await getAccessToken();
      // if (errorCatch(e) === "jwt expired")
      if (!accessToken && user) {
        await AuthService.logout();
        setUser(null);
      }
    };

    let ignore = verifyAccessToken();
  }, [routeName]);
};
