import React from 'react'

export default function MyBookingInfo() {
    return (
        <div>

            <div className="bg-[#21395D] py-20 ">
            </div>


            {/* title */}
            <div className='bg-[#E2E2E2] flex flex-col px-40 py-10 '>
                <div className=' flex justify-center'>

                    <img src="/src/icons/circle-correct-50.png" alt="" className='w-[200px] h-[200px]' />
                    <img src="/src/icons/circle-correct-50.png" alt="" className='w-[200px] h-[200px]' />
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


            <div className="bg-[#E2E2E2] p-40">
            </div>

            <div>
                <FootingPage />
            </div>
        </div>

    )
}
