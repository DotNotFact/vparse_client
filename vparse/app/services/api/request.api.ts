// import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
// import $api from "@/services/api/api";
// import { errorCatch } from "@/services/api/error.api";
// import Toast from "react-native-toast-message";

// export const request = async <T>(config: AxiosRequestConfig) => {
//   const onSuccess = (response: AxiosResponse<T>) => response.data;

//   const onError = (error: AxiosError<T>) => {
//     Toast.show({
//       type: "error",
//       text1: "Request error",
//       text2: errorCatch(error),
//     });

//     return Promise.reject(error);
//   };

//   return $api(config).then(onSuccess).catch(onError);
// };
