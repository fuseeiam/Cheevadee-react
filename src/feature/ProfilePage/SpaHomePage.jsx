import { Link } from "react-router-dom"

export default function SpaHomePage() {
    return (
        <div className="bg-[#21395D]">
            <div className="bg-[#21395D]">
                <div className=" p-10 flex justify-center">
                </div>
            </div>
            <div className=" p-10 flex justify-center">
                <h1 className="text-white text-4xl font-light">DEE SPA</h1>
            </div>
            <div className=" p-10 flex justify-center">
                <img src="/src/assets/hotel-5.png" alt="" />
            </div>
            <div className="p-5 flex justify-center">
                <div>
                    <span className="text-white text-xl font-light">
                        Have a day of relaxation in the busy city of Chiang Mai and spend a couple of hours at Dee Spa.
                    </span>
                </div>
            </div>
            <Link to="spa">
                <div className=" p-5 flex justify-center">
                    <h1 className="text-[#C18638] text-xl font-light hover:underline">DISCOVER MORE</h1>
                </div>
            </Link>
        </div>
    )
}
