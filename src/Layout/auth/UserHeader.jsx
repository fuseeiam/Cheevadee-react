import { Link } from "react-router-dom";
import BookingButton from "../../feature/Booking/BookingButton"
import Dropdown from "../Dropdown";
import { useAuth } from "../../hooks/use-auth";
import AdminDropdown from "../../page/admin/AdminDropdown";

export default function UserHeader() {
    const { authUser } = useAuth();

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
            {authUser?.role === "ADMIN" ? <AdminDropdown /> : <Dropdown />}
            <Link to="/auth/booking">
                <BookingButton />
            </Link>
        </div>

    </header>
}