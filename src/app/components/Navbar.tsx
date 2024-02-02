import { useUserContext } from "@/Context/profileContext";
import React from "react";

export const Navbar = () => {
  const { user } = useUserContext();
  const fName = user.firstName
  const initails = fName.charAt(0);
  return (
    <div className="w-full text-white bg-white rounded-b-2xl flex items-center justify-center md:px-6 lg:px-8 fixed top-0 z-10">
      <div className="p-4 flex flex-row items-center justify-between">
        <a
          href="#"
          className="text-lg text-black font-semibold tracking-widest uppercase rounded-lg focus:outline-none focus:shadow-outline"
        >
          Dashboard
        </a>
      </div>
      <nav className="flex-col text-black flex-grow pb-4 md:pb-0 hidden md:flex md:justify-end md:flex-row">
        <div className="inline-flex gap-2 items-center">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-200 font-bold">{initails}</span>
          <span>
            {user.firstName} {user.lastName}
          </span>
        </div>
      </nav>
    </div>
  );
};
