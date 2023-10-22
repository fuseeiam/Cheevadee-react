import React from 'react'

export default function ReservationCard() {
    return (
        <div className="bg-white w-[750px] h-[820px] rounded-md p-5 outline-none border border-gray-300 flex ">

            {/* Title */}
            <div className="flex flex-col p-5">
                <div className="flex justify-start">
                    <h1 className="text-4xl font-li">Reservation Summary</h1>
                </div>

                <div className=" flex mt-5 gap-5">
                    <img src="/src/assets/Logo1.png" alt="" className="w-[100px] h-[100px] " />
                    <div className="flex flex-col">
                        <span className="text-2xl font-semibold">
                            CHEEVA DEE HOTEL
                        </span>
                        <span className="text-2xl font-li">
                            Chiang Mai, THAILAND
                        </span>
                        <div className="flex gap-1">
                            <img src="/src/icons/star-48.png" alt="" className="w-[30px] h-[30px]" />
                            <img src="/src/icons/star-48.png" alt="" className="w-[30px] h-[30px]" />
                            <img src="/src/icons/star-48.png" alt="" className="w-[30px] h-[30px]" />
                            <img src="/src/icons/star-48.png" alt="" className="w-[30px] h-[30px]" />
                        </div>
                    </div>
                </div>

                {/* Traval date */}
                <div className="flex p-5 text-xl gap-1">
                    <div className="font-bold">2 nights :</div>
                    {/* ARRIVAL */}
                    <div className="fond-li">09/11/2023</div>
                    <div className="fond-li">-</div>
                    {/* DEPARTURE */}
                    <div className="fond-li">11/11/2023</div>
                </div>

                {/* room detail */}
                <div className="bg-[#E2E2E2] w-[450px] h-[180px] rounded-md outline-none border border-gray-300 flex flex-col p-5 text-xl">
                    {/* Room Type */}
                    <div>STANDRAD ROOM - No Window</div>
                    {/* details */}
                    <div className="hover:text-[#BD7416] hover:underline font-semibold mt-2.5" >2 adults</div>
                    <div className="hover:text-[#BD7416] hover:underline font-semibold mt-2.5" >2 twin beds</div>
                    <div className="flex justify-between">
                        <div className="text-[#C18638] hover:text-[#BD7416] hover:underline font-li mt-2.5" >view details / edit</div>
                        <div className="flex text-2xl font-semibold mt-1.5 gap-2">
                            <span>THB</span>
                            {/* price */}
                            <span>2,450</span>
                        </div>
                    </div>
                </div>

                {/* total price */}
                <div className="bg-[#D4D4D4] w-[450px] h-full rounded-md outline-none border border-gray-300 flex flex-col p-5 text-xl mt-5">
                    <div className="flex flex-col ">
                        <span className="text-2xl font-semibold py-2">Total</span>

                        <div className="flex flex-col items-end  ">
                            <div className="flex gap-2">
                                <span className="text-2xl font-semibold py-2">THB</span>
                                <span className="text-4xl font-bold ">4,900</span>
                            </div>
                            <span className="text-xl font-li">including all taxes and service charge</span>
                        </div>
                    </div>
                </div>

                {/* pay */}
                <div className="flex justify-between p-5 text-2xl font-li">
                    <span>Pay now</span>
                    <div className="flex gap-2">
                        <span>THB</span>
                        <span>4,900</span>
                    </div>
                </div>
                <hr />
                <div className="flex justify-between p-5 text-2xl font-li">
                    <span>Pay at the hotel</span>
                    <div className="flex gap-2">
                        <span>THB</span>
                        <span>0</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
