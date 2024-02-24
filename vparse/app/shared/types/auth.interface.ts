import { IUser } from "@/shared/types/user.interface";

// будет содержать поля _id и photo_200 из IUser
export interface IAuthFormData extends Pick<IUser, "_id" | "photo_200"> {}

export enum EnumSecureStore {
  ACCESS_TOKEN = "accessToken",
}

export enum EnumAsyncStorage {
  USER = "user",
}

export interface ITokens {
  accessToken: string;
}

export interface IAuthResponse extends ITokens {
  user: IUser;
}
