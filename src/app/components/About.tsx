import React from 'react'
import { Modal } from '.';
import { EditProfile } from '.';
import { useUserContext } from '@/Context/profileContext';

export const About = () => {
    const { user } = useUserContext();
    const [open, setOpen] = React.useState<Boolean>(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };
    console.log(user);
    return (
        <>
            <div className="mx-auto">
                {/* About Section */}
                <div className="bg-white p-6 shadow-sm rounded-2xl border-t-4 border-indigo-500 rounded-2xl h-full flex flex-col gap-4 items-start">
                    <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={20} fill='indigo-500'><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" /></svg>
                        <span className="font-bold">About</span>
                    </div>
                    <div className="text-gray-700">
                        <div className="grid md:grid-cols-2 text-sm">
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">First Name</div>
                                <div className="px-4 py-2">{user?.firstName}</div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Last Name</div>
                                <div className="px-4 py-2">{user?.lastName}</div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Gender</div>
                                <div className="px-4 py-2">{user?.gender}</div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Contact No.</div>
                                <div className="px-4 py-2">{user?.phoneNumber}</div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">
                                    Current Address
                                </div>
                                <div className="px-4 py-2">{user?.currAddress}</div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">
                                    Permanant Address
                                </div>
                                <div className="px-4 py-2">{user?.permaAddress}</div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Email</div>
                                <div className="px-4 py-2">
                                    <a
                                        className="text-blue-800"
                                        href="mailto:jane@example.com"
                                    >
                                        {user?.email}
                                    </a>
                                </div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Birthday</div>
                                <div className="px-4 py-2">Feb 06, 1998</div>
                            </div>
                        </div>
                    </div>

                    <button
                        className="bg-indigo-500 p-3 rounded-xl font-bold text-white uppercase inline-flex gap-4"
                        onClick={handleOpen}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width={30} fill='white'><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H322.8c-3.1-8.8-3.7-18.4-1.4-27.8l15-60.1c2.8-11.3 8.6-21.5 16.8-29.7l40.3-40.3c-32.1-31-75.7-50.1-123.9-50.1H178.3zm435.5-68.3c-15.6-15.6-40.9-15.6-56.6 0l-29.4 29.4 71 71 29.4-29.4c15.6-15.6 15.6-40.9 0-56.6l-14.4-14.4zM375.9 417c-4.1 4.1-7 9.2-8.4 14.9l-15 60.1c-1.4 5.5 .2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l60.1-15c5.6-1.4 10.8-4.3 14.9-8.4L576.1 358.7l-71-71L375.9 417z" /></svg>
                        Edit Profile
                    </button>

                </div>
            </div>

            <Modal isOpen={open}>
                <EditProfile onClose={handleClose} />
            </Modal>
        </>
    )
}
