// import { errorCatch } from "@/services/api/error.api";
import { SERVER_URL } from "@/config/api.config";
import axios from "axios";

// import {
//   deleteTokenStorage,
//   getAccessToken,
// } from "@/services/auth/auth.helper";

export const $api = axios.create({
  baseURL: SERVER_URL,
  withCredentials: true,
  headers: {
    "Accept-Charset": "utf-8",
    "Content-Type": "application/json",
  },
});

// $api.interceptors.request.use(async (config) => {
//   const accessToken = await getAccessToken();

//   if (config.headers && accessToken)
//     config.headers.Authorization = `Bearer ${accessToken}`;

//   return config;
// });

// $api.interceptors.response.use(
//   (config) => config,
//   async (error) => {
//     const originalRequest = error.config;

//     if (
//       (error.response.status === 401 ||
//         errorCatch(error) === "jwt expired" ||
//         errorCatch(error) === "jwt must be provided") &&
//       error.config &&
//       !error.config._isRetry
//     ) {
//       originalRequest._isRetry = true;
//       try {
//         //  await getNewTokens();
//         return $api.request(originalRequest);
//       } catch (error) {
//         if (errorCatch(error) === "jwt expired") await deleteTokenStorage();
//       }
//     }

//     throw error;
//   }
// );
// export default $api;
