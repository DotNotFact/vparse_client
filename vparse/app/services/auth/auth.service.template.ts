// import {
//   EnumAsyncStorage,
//   IAuthResponse,
//   ITokens,
// } from "@/shared/types/auth.interface";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// // import { request } from "@/services/api/request.api";
// import { getAuthUrl } from "@/config/api.config";

// import {
//   deleteTokenStorage,
//   getAccessToken,
//   saveUserToStorage,
// } from "@/services/auth/auth.helper";

// export const AuthService = {
//   async login() {
//     const response = await request<any>({
//       url: getAuthUrl(`/login`),
//       method: "POST",
//     });

//     if (response.accessToken) await saveUserToStorage(response);

//     return response;
//   },
//   async checkProtectedAccessToken() {
//     try {
//       const accessToken = await getAccessToken(); // Функция для получения access токена из хранилища

//       if (!accessToken) {
//         throw new Error("Access Token is missing");
//       }

//       const response = await request<any>({
//         url: getAuthUrl(`/checkprotectedaccesstoken`),
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//         },
//       });

//       if (response.accessToken) {
//         return true;
//       } else {
//         return false;
//       }
//     } catch (error) {
//       console.error("Error checking protected resource access", error);
//       return false;
//     }
//   },
//   async logout() {
//     await deleteTokenStorage();
//     await AsyncStorage.removeItem(EnumAsyncStorage.USER);
//   },
// };
