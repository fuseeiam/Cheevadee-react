import LoginButton from "../feature/auth/LoginButton";
import BookingButton from "../feature/Booking/BookingButton";


export default function Header() {
    return <header className="fixed w-screen flex justify-between text-xl text-light px-20 py-5 bg-[#21395D]">
        <div className="flex gap-2">
            <div className="h-11 w-11">
                <img src="/src/assets/Logo1.png" alt="" />
            </div>
            <div className=" text-white font-li py-2 justify-start">
                CHEEVA DEE HOTEL
            </div>
        </div>
        <div className="flex gap-4">
            <LoginButton />
            <BookingButton />
        </div>

    </header>
}