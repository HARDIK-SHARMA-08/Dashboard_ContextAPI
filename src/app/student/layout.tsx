"use client";
import React from "react";
import { Navbar, SideBar } from "../components";

export default function Layout({ children }: any) {
    return (
        <div className="flex items-center justify-center bg-neutral-100 ">
            <Navbar />
            <div className="h-screen w-full w-11/12 mx-auto grid grid-cols-12 justify-start items-center gap-6 p-8">
                <div className="col-span-3">
                    <SideBar />
                </div>
                <div className="col-span-9">
                    {children}
                </div>
            </div>
        </div>
    );
}
