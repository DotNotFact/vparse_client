export interface IUser {
  _id: string;
  first_name: string;
  last_name: string;
  photo_200: string;
  isAdmin: boolean;
}

// будет содержать все поля из IUser, за исключением _id и photo_200
export interface IUserEditInput extends Omit<IUser, "_id" | "photo_200"> {}
