import React from 'react'
import { Link } from 'react-router-dom';
import FootingPage from '../feature/ProfilePage/footingPage';

export default function MyBooking() {
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
            <Link to="mybooking/:bookingInfo">
                <div>
                    <div className='bg-[#E2E2E2] px-40 py-5 '>
                        <div className='flex flex-col '>
                            <h1 className='text-2xl font-semibold'>CHEEVA DEE HOTEL</h1>
                            <span className='text-2xl font-light mt-5'>Nov 9, 2023 - Nov 11, 2023</span>
                        </div>
                    </div>
                    <div className='bg-[#E2E2E2] flex justify-center px-40  gap-10'>

                        <div className='  bg-white w-full h-[280px] rounded-md p-5 outline-none border border-gray-300  '>
                            <div className='flex justify-between'>
                                <div className='flex gap-5'>
                                    <div>
                                        <img src="/src/assets/room-standard-1.jpeg" alt="" className='p5 w-[300px] h-[240px] rounded-md ' />
                                    </div>
                                    <div className=' flex flex-col'>
                                        <h2 className='text-2xl font-bold '>STANDRAD ROOM  - No Window</h2>
                                        <span className='flex text-xl font-li mt-5 gap-3'>
                                            <div>Nov 9, 2023 - Nov 11, 2023</div>
                                            <div> Chiang Mai</div>
                                        </span>
                                        <span className='text-xl font-li mt-5'>Completed</span>
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
            </Link>

            <div className="bg-[#E2E2E2] p-40">
            </div>

            <div>
                <FootingPage />
            </div>
        </div>




    )
}
