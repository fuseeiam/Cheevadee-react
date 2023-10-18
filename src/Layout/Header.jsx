import LoginHeader from "../feature/auth/LoginHeader";
import BookingButton from "../feature/Booking/BookingButton";
import { Link } from "react-router-dom";

export default function Header() {
    return <header className="fixed w-screen flex justify-between text-light px-40 py-5 bg-[#21395D]">
        <Link to="/">
            <div className="flex gap-2">
                <div className="h-11 w-11 py-1">
                    <img src="/src/assets/Logo1.png" alt="" />
                </div>
                <div className=" text-white text-3xl font-li py-2 justify-start">
                    CHEEVA DEE HOTEL
                </div>
            </div>
        </Link>
        <div className="flex gap-4">
            <Link to="/login">
                <div>
                    <LoginHeader />
                </div>
            </Link>

            <Link to="booking">
                <BookingButton />
            </Link>
        </div>

    </header>
}