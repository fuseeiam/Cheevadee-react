import React from 'react'
import Avatar from "../Avatar";
import { useAuth } from "../../hooks/use-auth";
import { useState } from 'react';
import CheckBookingModal from './checkBookingModal';

export default function CheckBookingCard({ bookingObj }) {
    const { authUser } = useAuth();

    const [isOpen, setIsOpen] = useState(false);
    console.log('bookingObj', bookingObj);
    const arrival = bookingObj.arrival.slice(0, 10)
    const departure = bookingObj.departure.slice(0, 10)
    const price = bookingObj.total_price
    const bookingStatus = bookingObj.bookingStatus

    const rejectedStatus = async () => {
        try {
            await axios.patch(`/admin/rejectbookingStatus/${bookingObj.id}`)
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="p-5">
            <div className="bg-white border border-gray border-3 p-3 flex justify-between rounded-xl">
                <div className="flex flex-1">
                    <div className="flex gap-10">
                        <div className=" flex gap-4 items-center rounded-xl hover:bg-gray-100">
                            <img className='w-64 h-52 rounded-xl' src={bookingObj.room.picture} />
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
                            <div>{bookingObj.user.firstName} {bookingObj.user.lastName}</div>
                            <div>{bookingObj.user.email}</div>
                            <div>{bookingObj.id}</div>
                            <div>{arrival} - {departure}</div>
                            <div>{price} Baht</div>
                            <div className='text-lg'>{bookingStatus}</div>
                        </div>
                    </div>
                </div>
                <div >
                    <div className='text-xl font-bold'>STATUS : {bookingObj.bookingStatus}</div>
                    {bookingObj.bookingStatus === "WAITING" ? (
                        <div>

                            <button onClick={() => setIsOpen(true)}
                                className="bg-[#C18638] hover:bg-[#BD7416] text-white text-center font-li w-full  h-15 px-20 py-4 rounded-md flex justify-center mt-20">Approve</button>
                            <CheckBookingModal open={isOpen} setIsOpen={setIsOpen} bookingObj={bookingObj} />
                            <button onClick={() => rejectedStatus()}
                                className="border border-[#C18638] bg-[white] hover:bg-gray-100 text-[#BD7416] text-center font-li w-full h-15 px-20 py-4 mt-2.5 rounded-md flex justify-center">Reject</button>
                        </div>
                    ) : ''}


                </div>
            </div>
        </div>

    )
}