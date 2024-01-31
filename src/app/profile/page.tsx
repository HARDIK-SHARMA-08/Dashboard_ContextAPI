"use client";
import { useUserContext } from "@/Context/profileContext";

export default function Profile() {
  const { user } = useUserContext();

  return (
    <>
      <div className="h-screen w-full flex flex-col p-10">
      <h1 className="font-bold text-6xl text-center">
        Hello {user.firstName} {user.lastName}!
      </h1>
      <div className="text-xl"><span className="font-bold">Age:</span> {user.age}</div>
      <div className="text-xl"><span className="font-bold">Address:</span> {user.address}</div>
      <div className="text-xl"><span className="font-bold">Phone Number:</span> {user.phoneNumber}</div>
      </div>
    </>
  );
}
