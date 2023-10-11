import TravelDate from "../feature/Booking/TravelDate";

export default function HomePage() {
    return (
        <>
            {/* profile hotel */}
            <div className="bg-[#21395D]">
                <img src="/src/assets/hotel-1.jpeg" alt="" className="w-screen h-screen" />
            </div>

            {/* booking */}
            <div>
                <TravelDate />
            </div>

            {/* welcome to hotel */}
            <div className="bg-[#21395D] flex justify-center p-20 ">
                <div className="w-[1110px] h-[740px] object-cover overflow-hidden ">
                    <img src="/src/assets/hotel-2.png" alt="" className=" w-full" />
                </div>
            </div>

            <div className="bg-[#21395D] px-20 flex gap-20">
                <div>
                    <img src="/src/assets/hotel-3.png" alt="" className=" w-[700px] h-[700px]" />
                </div>
                <div className=" w-1/2 ">
                    <div>
                        <h1 className="text-[#C18638] text-4xl">
                            Welcome to Cheeva Dee Hotel
                            located within the heart of
                            the Old City of Chiang Mai.
                        </h1>
                    </div>

                    <div className="mt-6">
                        <span className="text-white text-xl">
                            In addition to the standard of SHA, all guests get free Wi-Fi in all rooms and free parking if arriving by car.
                            Strategically situated in Old City, allowing you access and proximity to local attractions and sights.
                            Don't leave before paying a visit to the famous Wat Chedi Luang. Rated with 4 stars,this high-quality property provides guests with access to indoor pool and outdoor pool on-site.
                        </span>
                    </div>
                </div>
            </div>

            {/* room */}
            <div className="bg-[#21395D]">
                <div className=" p-10 flex justify-center">
                    <h1 className="text-white text-4xl">ACCOMMODATION</h1>
                </div>
                <div>
                    <div className="flex justify-center">
                        <img src="/src/assets/room-superior-1.jpeg" alt="" />
                    </div>
                    <div className=" p-5 flex justify-center">
                        <h1 className="text-[#C18638] text-xl">SUPERIOR ROOM</h1>
                    </div>
                </div>

                <div className=" p-5 flex justify-center">
                    <h1 className="text-[#C18638] text-xl ">VIEW ALL ROOM TYPES</h1>
                </div>
            </div>

            {/* spa */}
            <div className="bg-[#21395D]">
                <div className=" p-10 flex justify-center">
                    <h1 className="text-white text-4xl">DEE SPA</h1>
                </div>
                <div className=" p-10 flex justify-center">
                    <img src="/src/assets/spa-1.webp" alt="" />
                </div>
                <div className="p-5 flex justify-center">
                    <div>
                        <span className="text-white text-xl ">
                            Have a day of relaxation in the busy city of Chiang Mai and spend a couple of hours at Dee Spa.
                        </span>
                    </div>
                </div>
                <div className=" p-5 flex justify-center">
                    <h1 className="text-[#C18638] text-xl ">DISCOVER MORE</h1>
                </div>
            </div>

            {/* dining */}
            <div className="bg-[#21395D]">

                {/* food */}
                <div className=" p-10 flex justify-center">
                    <h1 className="text-white text-4xl">DINING</h1>
                </div>
                <div className="bg-[#21395D] px-20 flex gap-20">
                    <div>
                        <img src="/src/assets/dining-1.jpeg" alt="" />
                    </div>
                    <div>
                        <div>
                            <h1 className="text-[#C18638] text-4xl">
                                Cheeva Dee Hotel <br />
                                (SHA Extra Plus)
                            </h1>
                        </div>
                        <div className="mt-6">
                            <span className="text-white text-xl">
                                Begin the day with English breakfast. Guests can quench their thirst in the lounge bar with their favorite drink.
                            </span>
                        </div>
                        <div className="mt-6">
                            <span className="text-[#C18638] text-xl">
                                DISCOVER MORE
                            </span>
                        </div>
                    </div>
                </div>

                {/* pool */}
                <div className="bg-[#21395D] px-20 flex gap-20">

                    <div>
                        <div className="mt-6">
                            <h1 className="text-white text-2xl ">
                                Cheeva Dee Hotel
                            </h1>
                        </div>
                        <div className="mt-6">
                            <span className="text-white text-xl">
                                offers an excellent variety of recreational facilities. Don't forget to make a visit or two to the hotel's pool.
                            </span>
                        </div>
                    </div>
                    <div className="mt-6">
                        <img src="/src/assets/pool-5.webp" alt="" />
                    </div>
                </div>
            </div>
            <div className="bg-[#21395D]">
                <div className=" p-10 flex justify-center">

                </div>
            </div>

        </>
    )
}
