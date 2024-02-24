import { EnumSecureStore } from "@/shared/types/auth.interface";
import { getAccessToken } from "@/services/auth/auth.helper";
import { AuthService } from "@/services/auth/auth.service";
import { getItemAsync } from "expo-secure-store";
import { useAuth } from "@/hooks/useAuth";
import { useEffect } from "react";

export const useCheckAuth = (routeName?: string) => {
  const { user, setUser } = useAuth();

  useEffect(() => {
    const checkAccessToken = async () => {
      const accessToken = await getAccessToken();
      if (accessToken) {
        try {
          // await getNewTokens();
        } catch (e) {
          // if (errorCatch(e) === "jwt expired")
          await AuthService.logout();
          setUser(null);
        }
      }
    };

    //  let ignore = checkAccessToken();
  }, []);

  useEffect(() => {
    const verifyAccessToken = async () => {
      const accessToken = await getItemAsync(EnumSecureStore.ACCESS_TOKEN); // await AuthService.checkProtectedAccessToken();
      if (!accessToken && user) {
        await AuthService.logout();
        setUser(null);
      }
    };

    // let ignore = verifyAccessToken();
  }, [routeName]);
};
