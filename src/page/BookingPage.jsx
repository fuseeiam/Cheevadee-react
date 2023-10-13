// import BookingHeader from "../Layout/BookingHeader";
import BookingDate from "../feature/Booking/Bookingdate";
import BookingContainer from "../feature/Booking/BookingContainer";
import FootingPage from "../feature/ProfilePage/footingPage";
import { useEffect } from "react";
import { scrollToTop } from "../utils/scrollToTop";

export default function BookingPage() {
    useEffect(() => {
        scrollToTop()
    }, [])
    return (
        <div>
            {/* <BookingHeader /> */}

            <BookingDate />
            < BookingContainer />
            <FootingPage />
        </div>
    )
}
