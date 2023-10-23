import React from 'react'
import { Link } from 'react-router-dom';
import FootingPage from '../feature/ProfilePage/footingPage';
import { useEffect } from "react";
import { scrollToTop } from "../utils/scrollToTop";


export default function MyBooking() {
    useEffect(() => {
        scrollToTop()
    }, [])

    return (
        <div>

            <div className="bg-[#21395D] py-20 ">
            </div>

            <div className='flex justify-end bg-[#21395D] p-5'>
                <div className="flex gap-2.5 px-40">
                    <span className="text-white text-2xl font-light">Step :</span>
                    <button className="bg-[#D4D4D4] hover:bg-[#63635D] text-white text-xl  w-[35px] h-[35px] rounded-md text-center font-bold">
                        1
                    </button>
                    <button className="bg-[#D4D4D4] hover:bg-[#63635D] text-white text-xl  w-[35px] h-[35px] rounded-md text-center font-bold">
                        2
                    </button>
                    <button className="bg-[#C18638] hover:bg-[#BD7416] text-white text-xl  w-[35px] h-[35px] rounded-md text-center font-bold">
                        3
                    </button>

                </div>
            </div>

            {/* title */}
            <div className='bg-[#E2E2E2] flex flex-col px-40 py-5 '>
                <div className=' flex justify-start'>
                    <h1 className=' text-4xl font-semibold'>Bookings </h1>
                </div>
                <div className='items-end flex justify-end'>
                    <span className='text-[#C18638] hover:underline text-xl'>Can't find a booking? </span>
                </div>
            </div>

            {/* Your Bookibg */}

            <div>
                <div className='bg-[#E2E2E2] px-40 py-5 '>
                    <div className='flex flex-col '>
                        <h1 className='text-2xl font-semibold'>CHEEVA DEE HOTEL</h1>
                        {/* <span className='text-2xl font-light mt-5'>Nov 9, 2023 - Nov 11, 2023</span> */}
                    </div>
                </div>
                <div className='bg-[#E2E2E2] flex justify-center px-40  gap-10'>

                    <div className='  bg-white w-full h-full rounded-md p-5 outline-none border border-gray-300  '>
                        <div className='flex justify-between'>
                            <div className='flex gap-5'>
                                <div>
                                    <img src="/src/assets/room-standard-1.jpeg" alt="bookingRoom" className='p5 w-[400px] h-[340px] rounded-md ' />
                                </div>
                                <div className=' flex flex-col'>
                                    <h2 className='text-2xl font-bold '>STANDRAD ROOM</h2>
                                    <span className='flex text-xl font-li mt-3 gap-3'>
                                        <div>Nov 9, 2023 - Nov 11, 2023</div>
                                        <div>Chiang Mai</div>
                                    </span>
                                    {/* <span className='text-xl font-li mt-3'>Awaiting</span> */}
                                    <hr className=' mt-6' />
                                    <h2 className='flex flex-col mt-3 text-xl font-bold '>Check Your Details</h2>
                                    <div className='flex gap-5'>
                                        <div className='flex flex-col'>
                                            <span className='text-xl font-li mt-3'>Confirmation number</span>
                                            <span className='text-xl font-li'>PIN Code</span>
                                            <span className='text-xl font-li'>Booking Details</span>
                                            <span className='text-xl font-li'>Check-in</span>
                                            <span className='text-xl font-li'>Check-out</span>
                                            <span className='text-xl font-li'>Guest name</span>
                                        </div>
                                        <div className='flex flex-col'>
                                            <span className='text-xl font-li mt-3'>2497240205704580371</span>
                                            <span className='text-xl font-li'>221100</span>
                                            <span className='text-xl font-li'>2 nights, 1 room</span>
                                            <span className='text-xl font-li'>Thursday 9 November 2023</span>
                                            <span className='text-xl font-li'>Saturday 11 November 2023</span>
                                            <span className='text-xl font-li'>Guest name (for 2 guests)</span>
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
                                        {/* Admin is ckecking */}
                                        {/* <div className='flex flex-col items-center'>
                                            <img src="/src/icons/circle-gray-correct-50.png" alt=" CHECKING" className='w-[40px] h-[40px]' />
                                            <span className='text-[#63635D] text-xl font-li'>Confirmed</span>
                                        </div> */}

                                        {/* Admin is completed */}
                                        <div className='flex flex-col items-center'>
                                            <img src="/src/icons/circle-correct-50.png" alt="COMPLETED" className='w-[40px] h-[40px]' />
                                            <span className='text-[#21395D] text-xl font-li'>Confirmed</span>
                                        </div>
                                    </div>


                                </div>
                                <div className='w-[600px] h-[240px] rounded-xl mt-5 outline-none  border-[#21395D] border-2 flex flex-col'>
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
                                            <span>Check-in number : 312630043</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex justify-end text-4xl font-bold gap-5'>
                                <span >THB</span>
                                <h2>4,900</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* </Link> */}

            <div className="bg-[#E2E2E2] p-20">
            </div>
            <div className="bg-[#E2E2E2] p-40">
            </div>

            <div>
                <FootingPage />
            </div>
        </div>




    )
}
