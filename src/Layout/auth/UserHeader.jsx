import { Link } from "react-router-dom";
import BookingButton from "../../feature/Booking/BookingButton"
// import Avatar from '../../components/Avatar'
import Dropdown from "../Dropdown";

export default function UserHeader() {
    return <header className="fixed w-screen flex justify-between text-light px-40 py-5 bg-[#21395D]">
        <Link to="/auth">
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
            {/* <Avatar /> */}
            <Dropdown />
            <Link to="/auth/booking">
                <BookingButton />
            </Link>
        </div>

    </header>
}