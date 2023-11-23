import { useState } from "react";
import { useAuth } from "../../hooks/use-auth";
import axios from "../../config/axios";

export default function CheckBookingModal({ setIsOpen, open, bookingObj, toggle, setToggle }) {

    const { authUser } = useAuth();
    const arrival = bookingObj.arrival.slice(0, 10)
    const departure = bookingObj.departure.slice(0, 10)


    const completedStatus = async () => {
        try {
            await axios.patch(`/admin/confirmbookingStatus/${bookingObj.id}`)
            setToggle(!toggle);
            setIsOpen(false)
        } catch (err) {
            console.log(err);
        }
    }
    console.log(bookingObj);


    return (
        <>
            {open &&
                (
                    <>
                        <div className="fixed inset-0 bg-black/70 z-[30]"></div>
                        <div className="fixed z-[30] min-h-full inset-0 flex justify-center items-center">
                            <div className="bg-gray-200 p-5 w-[500px] rounded-xl">
                                <div className="flex flex-col gap-5">
                                    <div className="text-2xl font-bold  flex justify-center">Approve Booking</div>
                                    <div className="flex gap-10">
                                        <div className="flex flex-col gap-3 text-xl font-bold">
                                            <div>Name :</div>
                                            <div>Booking ID :</div>
                                            <div>Booking :</div>
                                        </div>
                                        <div className="flex flex-col gap-3 text-xl font-li">
                                            <div>{bookingObj.user.firstName} {bookingObj.user.lastName}</div>
                                            <div>{bookingObj.id}</div>
                                            <div>{arrival} - {departure}</div>
                                        </div>

                                    </div>
                                    <div className="flex gap-3 ">

                                        <button onClick={completedStatus}
                                            className="bg-[#C18638] hover:bg-[#BD7416] p-2 flex flex-1 text-white rounded-xl cursor-pointer justify-center">Approve</button>
                                        <button className="bg-white p-2 rounded-xl flex flex-1 text-[#C18638] cursor-pointer justify-center" onClick={() => setIsOpen(false)}>Cancel</button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </>)
            }
        </>
    );
}