import { Link } from "react-router-dom";

export default function SideBar() {
    return (
        <div className=" w-[297px] bg-slate-400 text-[#C18638] hover:text-[#BD7416] text-xl font-light mt-[93px]">
            <Link to="/auth/admin/manageBooking">
                <div className="h-24 border cursor-pointer border-white flex justify-center items-center bg-[#21395D]">
                    <p>Manage Booking</p>
                </div>
            </Link>
            <Link to="/auth/admin/managePayment">
                <div className="h-24 border cursor-pointer border-white flex justify-center items-center bg-[#21395D]">
                    <p>Manage Payment</p>
                </div>
            </Link>

        </div>
    );
}
