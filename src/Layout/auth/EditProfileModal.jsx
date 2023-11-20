import { useState } from "react";
import { useAuth } from "../../hooks/use-auth";

export default function EditProfileModal({ setIsOpen, open }) {

    const { authUser } = useAuth();


    return (
        <>
            {open &&
                (
                    <>


                        <div className="fixed inset-0 bg-black/70 z-[30]"></div>
                        <div className="fixed z-[30] min-h-full inset-0 flex justify-center items-center">
                            <div className="bg-gray-200 p-5 w-[500px] rounded-xl">
                                <div className="flex flex-col gap-5">
                                    <div className="text-2xl font-bold  flex justify-center">Edit Profile</div>
                                    <div className="flex justify-center">
                                        <div className="bg-gray-300  hover:bg-gray-400 w-[120px] h-[120px] rounded-full"></div>
                                        <div className="text-white font-bold text-xl absolute  -translate-y-1/2 top-1/2">Edit</div>
                                    </div>
                                    <div className="flex gap-3 ">
                                        <button className="bg-[#C18638] hover:bg-[#BD7416] p-2 flex flex-1 text-white rounded-xl cursor-pointer justify-center">Submit</button>
                                        <button className="bg-white p-2 rounded-xl flex flex-1 text-[#C18638] cursor-pointer justify-center" onClick={() => setIsOpen(false)}>Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </>
                )
            }
        </>
    );
}