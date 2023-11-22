import { useState } from "react";
import { useAuth } from "../../hooks/use-auth";

export default function checkBookingModal({ setIsOpen, open }) {

    const { authUser } = useAuth();
    const [input, setInput] = useState({
        arrival: '',
        departure: ''
    });

    return (
        <>
            {open &&
                (
                    <>
                        <div className="fixed inset-0 bg-black/70 z-[30]"></div>
                        <div className="fixed z-[30] min-h-full inset-0 flex justify-center items-center">
                            <div className="bg-gray-200 p-5 w-[500px] rounded-xl">
                                <div className="flex flex-col gap-5">
                                    <div className="text-2xl font-bold  flex justify-center">Cancel Booking</div>

                                    <div className="flex flex-col p-5">
                                        <div className='text-2xl font-bold '>{detail.room.roomtype}</div>
                                        <div>
                                            <img src={detail.room.picture} alt="bookingRoom" className='p-5 w-[400px] rounded-md ' />
                                        </div>
                                        <span className='flex text-xl font-li mt-3 justify-between'>
                                            <div>{arrival} - {departure}</div>
                                            <div>Chiang Mai</div>
                                        </span>

                                        <span>Check-in number : {detail.id}</span>
                                        <div>
                                            <div className='flex gap-5'>
                                                <div className='flex flex-col'>
                                                    <span className='text-xl font-li'>Booking Details</span>
                                                    <span className='text-xl font-li'>Check-in</span>
                                                    <span className='text-xl font-li'>Check-out</span>
                                                    <span className='text-xl font-li'>Guest name</span>
                                                </div>
                                                <div className='flex flex-col'>
                                                    <span className='text-xl font-li'>{date}{date > 1 ? " nights" : "night"}, {detail.room.bed}, {detail.room.view}</span>
                                                    <span className='text-xl font-li'>{arrival}</span>
                                                    <span className='text-xl font-li'>{departure}</span>
                                                    <span className='text-xl font-li'>{detail.user.firstName} {detail.user.lastName}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex gap-3 ">
                                        <button className="bg-[#C18638] hover:bg-[#BD7416] p-2 flex flex-1 text-white rounded-xl cursor-pointer justify-center">Approve</button>
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