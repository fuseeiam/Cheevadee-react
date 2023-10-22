import { Link } from "react-router-dom";

export default function BookingHeader() {
    return (
        <div className="bg-[#21395D] flex justify-between">
            <Link to="/booking">
                <div className="flex px-40 gap-2.5 ">
                    <img src="/src/icons/white-arrow-30.png" alt="" className="w-[30px] h-[30px]" />
                    <span className="text-white text-2xl font-light">Back</span>
                </div>
            </Link>

            <div className="flex gap-2.5 flex-1 justify-center">
                <img src="/src/icons/white-lock-30.png" alt="" />
                <span className="text-white text-2xl font-light">Secure booking (It only takes 2 minutes)</span>
            </div>

            <div className="flex gap-2.5 px-40">
                <span className="text-white text-2xl font-light">Step :</span>
                <button className="bg-[#D4D4D4] hover:bg-[#63635D] text-white text-xl  w-[35px] h-[35px] rounded-md text-center font-bold">
                    1
                </button>
                <button className="bg-[#C18638] hover:bg-[#BD7416] text-white text-xl  w-[35px] h-[35px] rounded-md text-center font-bold">
                    2
                </button>
                <button className="bg-[#D4D4D4] hover:bg-[#63635D] text-white text-xl  w-[35px] h-[35px] rounded-md text-center font-bold">
                    3
                </button>
            </div>

        </div>
    )
}
