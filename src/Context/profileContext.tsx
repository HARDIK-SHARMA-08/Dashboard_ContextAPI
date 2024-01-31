import React, { createContext, useContext, useState } from "react";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  phoneNumber: number;
  address: string;
}

interface UserContextProps {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}

const UserContext = createContext<UserContextProps>({
  user: {
    id: 0,
    firstName: "",
    lastName: "",
    age: 0,
    phoneNumber: 0,
    address: "",
  },
  setUser: () => {},
});

export default function AppStore({ children }: any) {
  const [user, setUser] = useState<User>({
    id: 1,
    firstName: "",
    lastName: "",
    age: 90,
    phoneNumber: 9090909090,
    address: "demo",
  });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}
