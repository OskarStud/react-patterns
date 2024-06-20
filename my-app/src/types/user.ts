import { Dispatch, SetStateAction } from "react";

export type TUser = {
  name?: string;
  username: string;
  phone: string;
  website: string;
};

export interface TUserContext {
  user?: TUser;
  setUser?: Dispatch<SetStateAction<TUser | undefined>>;
}
