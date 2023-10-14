import { Link } from "react-router-dom";

export default function BookingButton() {
    return (
        <Link to="/booking">
            <button className="bg-[#C18638] hover:bg-[#BD7416] text-white text-xl py-3 w-40 rounded-md text-center font-li ">
                RESERVE
            </button>
        </Link>
    );
}