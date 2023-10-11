
export default function DiningHomePage() {
    return (
        <div>
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
        </div>

    )
}
