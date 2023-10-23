import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";

export default function PaymentBoonkingForm() {
    const [isOpen, setIsOpen] = useState(false);
    const { authUser } = useAuth();

    return (
        <>
            <div className='text-[#C18638] text-2xl justify-center'>Reserve is successful.</div>
            <br />
            <Link to={`/auth/booking/mybooking/${authUser.id}`} onClick={() => setIsOpen(false)}>
                <div>
                    <button className="bg-[#C18638] hover:bg-[#BD7416] text-white text-xl py-2.5 w-full rounded-md text-center font-li">
                        My Booking
                    </button>
                </div>
            </Link>
        </>
    )
}
