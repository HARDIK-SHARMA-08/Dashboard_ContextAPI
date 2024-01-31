"use client";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-row items-center justify-center p-24 gap-10">
        <Link
          href="/signup"
          className="bg-white text-black text-center font-extrabold p-10 rounded-xl text-6xl uppercase inline-flex items-center gap-6 justify-center"
        >
          SignUp
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={100}
            viewBox="0 0 640 512"
          >
            <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
          </svg>
        </Link>

        {/* <Link
          href="/profile"
          className="bg-white text-black w-1/2 text-center font-extrabold p-10 rounded-xl text-6xl uppercase inline-flex items-center gap-6 justify-center"
        >
          Profile
          <svg xmlns="http://www.w3.org/2000/svg" width={65} viewBox="0 0 448 512">
            <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
          </svg>
        </Link> */}
      </main>
    </>
  );
}
