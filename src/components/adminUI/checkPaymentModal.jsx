import { useState } from "react";
import Avatar from "../Avatar";
import { useAuth } from "../../hooks/use-auth";
import axios from "../../config/axios";



export default function CheckPaymentModal({ open, setIsOpen, bookingObj }) {
    const { authUser } = useAuth();
    console.log(bookingObj);
    console.log(authUser);

    const price = bookingObj.total_price
    const paymentSlip = bookingObj.paymentSlip

    const completedStatus = async () => {
        try {
            await axios.patch(`/admin/paymentStatus/${bookingObj.id}`)
        } catch (err) {
            console.log(err);
        }
    }
    // const [isOpen, setIsOpen] = useState(false);

    // const dateData = new Date(data.createdAt);

    // const date = new Intl.DateTimeFormat("en-AU", {
    //     year: "numeric",
    //     month: "long",
    //     day: "numeric",
    //     timeZone: "Asia/Bangkok",
    // }).format(dateData);
    // const time = new Intl.DateTimeFormat("en-AU", {
    //     timeZone: "Asia/Bangkok",
    //     hour: "numeric",
    //     minute: "numeric",
    //     second: "numeric",
    // }).format(dateData);

    return (
        <>
            {open &&
                (
                    <>
                        <div className="fixed inset-0 bg-black/70 z-[30]"></div>
                        <div className="fixed z-[30] min-h-full inset-0 flex justify-center items-center">
                            <div className="bg-gray-200 p-5 w-[500px] rounded-xl">
                                <div className="flex flex-col gap-5">
                                    <div className="text-2xl font-bold  flex justify-center">Check Payment</div>
                                    <div className="rounded-lg p-3 w-full ">
                                        <img src={paymentSlip} alt="" />
                                    </div>
                                    <div className="text-xl font-bold">Price : {price} Baht</div>
                                    <div className="flex gap-3 ">
                                        <button onClick={() => { completedStatus(); setIsOpen(false) }}
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