import React from 'react'
import Avatar from "../Avatar";
import { useAuth } from "../../hooks/use-auth";

export default function CheckBookingCard() {
    const { authUser } = useAuth();

    return (
        <div className="p-5">
            <div className="bg-white border border-gray border-3 p-3 flex justify-between rounded-xl">
                <div className="flex flex-1">
                    <div className="flex gap-10">
                        <div className=" flex gap-4 items-center rounded-xl hover:bg-gray-100">
                            <Avatar className='h-52' src={authUser?.profileImage} />
                        </div>
                        <div className="flex flex-col gap-3 text-xl font-bold">
                            <div>Name :</div>
                            <div>E-mail :</div>
                            <div>Booking ID :</div>
                            <div>Booking :</div>
                            <div>Price :</div>
                            <div>Booking Status :</div>
                        </div>
                        <div className="flex flex-col gap-3 text-xl font-li">
                            <div>Firstname Lastname</div>
                            <div>a@email.com</div>
                            <div>id</div>
                            <div>Check in - Check out</div>
                            <div>2,000 Baht</div>
                            <div>waiting</div>
                        </div>
                    </div>
                </div>
                <div >
                    <div className='text-xl font-bold'>STATUS :  WAITING</div>
                    <button className="bg-[#C18638] hover:bg-[#BD7416] text-white text-center font-li w-full  h-15 px-20 py-4 rounded-md flex justify-center mt-20">Approve</button>
                    <button className="border border-[#C18638] bg-[white] hover:bg-gray-100 text-[#BD7416] text-center font-li w-full h-15 px-20 py-4 mt-2.5 rounded-md flex justify-center">Reject</button>
                </div>
            </div>
        </div>

    )
}