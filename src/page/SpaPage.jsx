import { useEffect } from "react";
import Header from "../Layout/Header";
import FootingPage from "../feature/ProfilePage/footingPage";
import { scrollToTop } from "../utils/scrollToTop";

export default function SpaPage() {
    useEffect(() => {
        scrollToTop()
    }, [])

    return (
        <div>
            <div>
                <Header />
            </div>

            {/* cover spa */}
            <div>
                <div className="bg-[#21395D]">
                    <img src="/src/assets/hotel-5.png" alt="" className="w-screen h-screen" />
                </div>

                {/* title spa */}
                <div className=" bg-[#21395D]  p-10 flex justify-center">
                    <h1 className="text-white text-4xl font-light">DEE DPA</h1>
                </div>
                <div>
                    <div className="bg-[#21395D] px-40 py-10 flex gap-20">
                        <div>
                            <img src="/src/assets/spa-room2.png" alt="" />
                        </div>
                        <div>
                            <div>
                                <h1 className="text-[#C18638] text-4xl font-light">
                                    Cheeva Dee Hotel <br />
                                    (SHA Extra Plus)
                                </h1>
                            </div>

                            <div className="mt-6 text-xl font-light">
                                <h1 className="text-white text-xl">Open Daily 10:00 to 22:00</h1>
                            </div>

                            <div className="mt-6 text-xl font-light">
                                <span className="text-white text-xl">
                                    Have a day of relaxation in the busy city of Chiang Mai and spend a couple of hours at
                                    <span className="text-[#C18638]"> Dee Spa.</span>
                                </span>
                            </div>


                        </div>
                    </div>

                    {/* spa room */}
                    <div className="bg-[#21395D] px-40 py-10 gap-10 flex justify-between ">
                        <div className="bg-[#21395D]">
                            <img src="/src/assets/spa-room1.png" alt="" className="w-screen h-screen" />
                        </div>
                        <div className="bg-[#21395D] ">
                            <img src="/src/assets/spa-room.jpeg" alt="" className="w-screen h-screen" />
                        </div>

                    </div>


                    <div className="bg-[#21395D]">
                        <div className=" p-10 flex justify-center">
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <FootingPage />
            </div>
        </div>
    )
}
