import React, { createContext, useContext, useState } from "react";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  phoneNumber: number;
  currAddress: string;
  permaAddress: string;
  email: string;
  gender: string;
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
    currAddress: "",
    permaAddress: "",
    gender: "",
    email: "",
  },
  setUser: () => {},
});

export default function AppStore({ children }: any) {
  const [user, setUser] = useState<User>({
    id: 0,
    firstName: "",
    lastName: "",
    age: 0,
    phoneNumber: 0,
    currAddress: "",
    permaAddress: "",
    email: "",
    gender: "",
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
