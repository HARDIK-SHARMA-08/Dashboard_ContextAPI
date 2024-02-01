import { useUserContext } from "@/Context/profileContext";
import React from "react";

export const Navbar = () => {
  const { user } = useUserContext();
  return (
    <div className="w-full text-white bg-white rounded-xl flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
      <div className="p-4 flex flex-row items-center justify-between">
        <a
          href="#"
          className="text-lg text-black font-semibold tracking-widest uppercase rounded-lg focus:outline-none focus:shadow-outline"
        >
          Dashboard
        </a>
      </div>
      <nav className="flex-col text-black flex-grow pb-4 md:pb-0 hidden md:flex md:justify-end md:flex-row">
        <div className="relative">
          <span>
            {user.firstName} {user.lastName}
          </span>
        </div>
      </nav>
    </div>
  );
};
