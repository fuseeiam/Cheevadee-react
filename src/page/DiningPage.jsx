import Header from "../Layout/Header";
import FootingPage from "../feature/ProfilePage/footingPage";
import { Link } from "react-router-dom";

export default function DiningPage() {
    return (
        <div>
            <div>
                <Header />
            </div>

            {/* cover dining */}
            <div>
                <div className="bg-[#21395D]">
                    <img src="/src/assets/food-11.jpeg" alt="" className="w-screen h-screen" />
                </div>

                {/* title dining */}
                <div className=" bg-[#21395D]  p-10 flex justify-center">
                    <h1 className="text-white text-4xl font-light">DINING</h1>
                </div>
                <div>
                    <div className="bg-[#21395D] px-40 py-10 flex gap-20">
                        <div>
                            <img src="/src/assets/dining-3.jpeg" alt="" />
                        </div>
                        <div>
                            <div>
                                <h1 className="text-[#C18638] text-4xl font-light">
                                    Cheeva Dee Hotel <br />
                                    (SHA Extra Plus)
                                </h1>
                            </div>

                            <div className="mt-6 text-xl font-light">
                                <h1 className="text-white text-xl">Open Daily 7:00 to 22:00</h1>
                            </div>

                            <div className="mt-6 text-xl font-light">
                                <span className="text-white text-xl">
                                    Experience the wonderful taste of finest local, imported and seasonal ingredients while celebrating with a unique blend of
                                    <span className="text-[#C18638]"> Thai & local flavors.</span>
                                </span>
                            </div>


                        </div>
                    </div>

                    {/* food */}
                    <div className="bg-[#21395D] px-40 py-10 gap-10 flex justify-between ">
                        <div className="bg-[#21395D] ">
                            <img src="/src/assets/food-9.jpeg" alt="" className="w-screen h-screen" />
                        </div>
                        <div className="bg-[#21395D]">
                            <img src="/src/assets/food-10.jpeg" alt="" className="w-screen h-screen" />
                        </div>
                    </div>

                    {/* desert */}
                    <div className="bg-[#21395D] px-40  gap-10 flex justify-between ">
                        <div className="bg-[#21395D] ">
                            <img src="/src/assets/desert-2.jpeg" alt="" className="w-screen h-screen" />
                        </div>
                        <div className="bg-[#21395D]">
                            <img src="/src/assets/desert-3.jpeg" alt="" className="w-screen h-screen" />
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
