import axios from "../../config/axios";

export default function AdminBookingCard({ bookingObj }) {

    const [isPaymentBookingOpen, setIsPaymentBookingOpen] = useState(false);
    const [isConfirmBookingOpen, setIsConfirmBookingOpen] = useState(false);

    const cancelBooking = async () => {
        try {
            await axios.patch(`/booking/cancel/${bookingObj.id}`);
        } catch (error) {
            console.log(error);
        }
    };

    const confirmBooking = async () => {
        try {
            await axios.patch(`/booking/confirm/${bookingObj.id}`);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='  bg-white w-full h-full rounded-md p-5 outline-none border border-gray-300  '>
            <div className='flex justify-between '>
                <div className='flex gap-5'>
                    <div>
                        <img src={detail.room.picture} alt="bookingRoom" className='p-5 w-[400px] rounded-md ' />
                    </div>
                    <div className=' flex flex-col'>
                        <h2 className='text-2xl font-bold '>{detail.room.roomtype}</h2>
                        <span className='flex text-xl font-li mt-3 justify-between'>
                            <div>{arrival} - {departure}</div>
                            <div>Chiang Mai</div>
                        </span>
                        {/* <span className='text-xl font-li mt-3'>Awaiting</span> */}
                        <hr className=' mt-6' />
                        <h2 className='flex flex-col mt-3 text-xl font-bold '>Check User Details</h2>
                        <div className='flex gap-5'>
                            <div className='flex flex-col'>
                                {/* <span className='text-xl font-li mt-3'>Confirmation</span> */}
                                <span className='text-xl font-li'>Booking Details</span>
                                <span className='text-xl font-li'>Check-in</span>
                                <span className='text-xl font-li'>Check-out</span>
                                <span className='text-xl font-li'>Guest name</span>
                            </div>
                            <div className='flex flex-col'>
                                {/* <span className='text-xl font-li mt-3'><img src={detail.room.picture} alt="" /></span> */}

                                <span className='text-xl font-li'>{date}{date > 1 ? " nights" : "night"}, {detail.room.bed}, {detail.room.view}</span>
                                <span className='text-xl font-li'>{arrival}</span>
                                <span className='text-xl font-li'>{departure}</span>
                                <span className='text-xl font-li'>{detail.user.firstName} {detail.user.lastName}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex-flex-col'>
                    <div className='flex justify-center gap-14 '>
                        <div className='flex flex-col items-center'>
                            <img src="/src/icons/circle-correct-50.png" alt="PENDING" className='w-[40px] h-[40px]' />
                            <span className='text-[#21395D] text-xl font-li'>Paid</span>
                        </div>
                        <div className='flex flex-col items-center'>
                            <img src="/src/icons/circle-correct-50.png" alt="PENDING" className='w-[40px] h-[40px]' />
                            <span className='text-[#21395D] text-xl font-li'>Awaiting</span>
                        </div>
                        <div>

                            {/* <div className='flex flex-col items-center'>
                        <img src="/src/icons/circle-gray-correct-50.png" alt=" CHECKING" className='w-[40px] h-[40px]' />
                        <span className='text-[#63635D] text-xl font-li'>Confirmed</span>
                    </div> */}


                            <div className='flex flex-col items-center'>
                                <img src="/src/icons/circle-correct-50.png" alt="COMPLETED" className='w-[40px] h-[40px]' />
                                <span className='text-[#21395D] text-xl font-li'>Confirmed</span>
                            </div>
                        </div>


                    </div>
                    <div className='w-[500px] h-[240px] rounded-xl mt-5 outline-none  border-[#21395D] border-2 flex flex-col'>
                        <div className='p-5'>
                            {/* <div className='text-4xl font-semibold'>
                        <h1>Your booking is <span className='text-[#C18638]'>Awaiting</span></h1>
                    </div> */}

                            <div className='text-4xl font-semibold'>
                                <h1>Your booking is <span className='text-[#C18638]'>Confirmed</span></h1>
                            </div>

                            <h2 className=' text-xl font-semibold mt-7'>When you arrive, present a photo ID that matches the guest name below.</h2>
                            <div className='flex flex-col text-xl font-li'>
                                <span>Provide this number at check-in :</span>
                                <span>Check-in number : {detail.id}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex justify-end text-4xl font-bold gap-5'>
                        <span >THB</span>
                        <h2>{detail.total_price}</h2>
                    </div>
                    <div className="mt-10 flex flex-col ">
                        {/* <EditBookingModal setIsOpen={setIsEditBookingOpen} open={isEditBookingOpen} />
                        <button onClick={() => setIsEditBookingOpen(true)}
                            className="bg-[#C18638] hover:bg-[#BD7416] text-white text-center font-li  h-15 px-20 py-4 rounded-md flex justify-center">
                            EDIT
                        </button> */}

                        <button onClick={() => setIsPaymentBookingOpen(true)}
                            className="bg-[#C18638] hover:bg-[#BD7416] text-white text-center font-li  h-15 px-20 py-4 mt-5 rounded-md flex justify-center">
                            PENDING
                        </button>
                        <checkPaymentModal setIsOpen={setIsConfirmBookingOpen} open={isConfirmBookingOpen} />

                        <button onClick={() => setIsConfirmBookingOpen(true)}
                            className="bg-[#C18638] hover:bg-[#BD7416] text-white text-center font-li  h-15 px-20 py-4 mt-5 rounded-md flex justify-center">
                            WAITING
                        </button>
                        <checkBookingModal setIsOpen={setIsConfirmBookingOpen} open={isConfirmBookingOpen} />


                    </div>
                </div>

            </div>
        </div>
    )
}
