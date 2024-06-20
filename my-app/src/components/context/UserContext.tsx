import { createContext, ReactNode, useMemo, useState } from "react";
import { TUser, TUserContext } from "../../types/user";

export const UserContext = createContext<TUserContext>({});

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<TUser>();

  const providerValue: TUserContext = useMemo(
    () => ({
      user,
      setUser,
    }),
    [user],
  );

  return (
    <UserContext.Provider value={providerValue}>
      {children}
    </UserContext.Provider>
  );
};
