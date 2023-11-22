import { useState } from "react";
import { useAuth } from "../../hooks/use-auth";

export default function CancelBookingModal({ setIsOpen, open, cancelBooking }) {

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
                                    <div>For cancellation, 100 percent of total amount will be charged. No amendment. Non-refundable. No show, 100 percent of total amount will be charged.</div>
                                    <div className="flex gap-3 ">
                                        <button className="bg-[#C18638] hover:bg-[#BD7416] p-2 flex flex-1 text-white rounded-xl cursor-pointer justify-center" onClick={() => { cancelBooking(); setIsOpen(false) }}>Submit</button>
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