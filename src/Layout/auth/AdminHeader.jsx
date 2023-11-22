import { Link } from "react-router-dom";
import checkBookingPage from "../../page/admin/CheckBookingPage";
import AdminDropdown from "../../page/admin/AdminDropdown";

export default function AdminHeader() {
    return <header className="w-screen flex justify-between text-light px-40 py-5 bg-[#21395D]">
        <Link to="/auth/admin">
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
            <AdminDropdown />
            <Link to="/auth/admin/managebooking">
                <checkBookingPage />
            </Link>
        </div>

    </header>
}