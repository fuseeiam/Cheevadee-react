import React from 'react'
import FootingPage from '../feature/ProfilePage/footingPage';
import { useEffect } from "react";
import { scrollToTop } from "../utils/scrollToTop";
import axios from "../config/axios"
import { useState } from 'react';
import BookingCardHistory from '../components/BookingCardHistory';


export default function MyBooking() {
    const [allBooking, setAllBooking] = useState([]);
    const [toggle, setToggle] = useState(false);
    useEffect(() => {
        scrollToTop()
        axios.get("/booking/history").then(res => setAllBooking(res.data.bookingDetails)).catch(err => console.log(err))
    }, [toggle]);



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
            <div className=' bg-[#E2E2E2] px-20 '>
                <div className=' flex flex-col py-5 '>
                    <div className=' flex justify-start'>
                        <h1 className=' text-4xl font-semibold'>Bookings </h1>
                    </div>
                    <div className='items-end flex justify-end'>
                        <span className='text-[#C18638] hover:underline text-xl'>Can't find a booking? </span>
                    </div>
                </div>

                {/* Your Bookibg */}

                <div>
                    <div className='py-5 '>
                        <div className='flex flex-col '>
                            <h1 className='text-2xl font-semibold'>CHEEVA DEE HOTEL</h1>
                            {/* <span className='text-2xl font-light mt-5'>Nov 9, 2023 - Nov 11, 2023</span> */}
                        </div>
                    </div>
                    <div className='flex flex-col justify-center  gap-10'>
                        {allBooking.map(el => <BookingCardHistory key={el.id} detail={el} toggle={toggle} setToggle={setToggle} />)}

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
