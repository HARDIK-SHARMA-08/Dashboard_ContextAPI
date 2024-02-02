import Link from 'next/link'
import React from 'react'

export const SideBar = () => {
    return (
        <div className="w-full">
            {/* About Section */}
            <div className="bg-white p-6 shadow-sm rounded-2xl border-t-4 border-indigo-500 rounded-2xl h-full flex flex-col items-start justify-start text-black font-bold gap-2">
                <Link href="/profile">User Profile</Link>
                <Link href="/student">Students</Link>
            </div>
        </div>
    )
}
