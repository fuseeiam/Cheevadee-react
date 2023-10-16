import StandardBookingCard from "../BookingRoomType/StandardBookingCard";
import SuperiorBookingCard from "../BookingRoomType/SuperiorBookingCard";
import DeluxeBookingCard from "../BookingRoomType/DeluxeBookingCard";
import JuniorSuiteBookingCard from "../BookingRoomType/JuniorSuiteBookingCard";

export default function BookingContainer() {
    return (
        <div>
            <StandardBookingCard />
            <SuperiorBookingCard />
            <DeluxeBookingCard />
            <JuniorSuiteBookingCard />
            <div className="bg-[#21395D] py-20 ">
            </div>
        </div>
    )
}
