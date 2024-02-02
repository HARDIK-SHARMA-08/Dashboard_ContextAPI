"use client"
import { useStudentContext } from "@/Context/studentContext";

export default function Page({ params }: { params: { id: number } }) {
    const { students } = useStudentContext();
    const StudentId = params.id;
    const selectedStudent = students[StudentId]
    console.log("Students::", students);
    console.log("Selected Student::", selectedStudent);
    
    return <div>My Post: {params.id}
        <div className="mx-auto">
            <div className="bg-white p-6 shadow-sm rounded-2xl border-t-4 border-indigo-500 rounded-2xl h-full flex flex-col items-start">
                <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                    <span className="text-green-500">
                        <svg
                            className="h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                        </svg>
                    </span>
                    <span className="tracking-wide">About</span>
                </div>
                <div className="text-gray-700">
                    <div className="grid md:grid-cols-2 text-sm">
                        <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">First Name</div>
                            <div className="px-4 py-2">{selectedStudent?.firstName}</div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">Last Name</div>
                            <div className="px-4 py-2">{selectedStudent?.lastName}</div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">Gender</div>
                            <div className="px-4 py-2">{selectedStudent?.gender}</div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">Contact No.</div>
                            <div className="px-4 py-2">{selectedStudent?.phoneNumber}</div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">
                                Current Address
                            </div>
                            <div className="px-4 py-2">{selectedStudent?.currAddress}</div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">
                                Permanant Address
                            </div>
                            <div className="px-4 py-2">{selectedStudent?.permaAddress}</div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">Email</div>
                            <div className="px-4 py-2">
                                <a
                                    className="text-blue-800"
                                    href="mailto:jane@example.com"
                                >
                                    {selectedStudent?.email}
                                </a>
                            </div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">Birthday</div>
                            <div className="px-4 py-2">Feb 06, 1998</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
}