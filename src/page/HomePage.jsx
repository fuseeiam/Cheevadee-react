import TravelDate from "../feature/Booking/TravelDate";
import ProfileHomPage from "../feature/ProfilePage/ProfileHomPage";
import RoomHomePage from "../feature/ProfilePage/RoomHomePage";
import SpaHomePage from "../feature/ProfilePage/SpaHomePage";
import DiningHomePage from "../feature/ProfilePage/DiningHomePage";

export default function HomePage() {
    return (
        <>
            {/* profile hotel */}
            <div className="bg-[#21395D]">
                <img src="/src/assets/hotel-1.jpeg" alt="" className="w-screen h-screen" />
            </div>

            {/* booking */}
            <div>
                <TravelDate />
            </div>

            {/* welcome to hotel */}
            <ProfileHomPage />

            {/* room */}
            <div>
                < RoomHomePage />
            </div>

            {/* spa */}
            <div>
                <SpaHomePage />
            </div>

            {/* dining */}
            <div>
                <DiningHomePage />
            </div>

        </>
    )
}
