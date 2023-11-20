import { useState } from "react";
import { useAuth } from "../../hooks/use-auth";

export default function EditBookingModal({ setIsOpen, open }) {

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
                                    <div className="text-2xl font-bold  flex justify-center">Edit Date</div>
                                    <div className="flex flex-col text-xl font-semibold">
                                        Arrival
                                        <input type="date" className="text-[#63635D] cursor-pointer text-xl font-li rounded-md p-2 w-full h-[60px] outline-none border border-gray-300"
                                            value={input.arrival ?? (new Date()).getUTCDate()}
                                            onChange={e => setInput({ ...input, arrival: e.target.value })} />
                                    </div>
                                    <div className="flex flex-col text-xl font-semibold" >
                                        Departure
                                        <input type="date" className="text-[#63635D] cursor-pointer text-xl font-li rounded-md p-2 w-full h-[60px] outline-none border border-gray-300"
                                            value={input.departure}
                                            onChange={e => setInput({ ...input, departure: e.target.value })} />
                                    </div>
                                    <div className="flex gap-3 ">
                                        <button className="bg-emerald-600 p-2 flex flex-1 text-white rounded-xl cursor-pointer justify-center">Submit</button>
                                        <button className="bg-red-700 p-2 rounded-xl flex flex-1 text-white cursor-pointer justify-center" onClick={() => setIsOpen(false)}>Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>)
            }
        </>
    );
}