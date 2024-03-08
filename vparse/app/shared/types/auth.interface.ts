import { IUser } from "@/shared/types/user.interface";

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
