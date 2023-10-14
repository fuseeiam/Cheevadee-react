// import BookingHeader from "../Layout/BookingHeader";
import BookingDateRates from "../feature/Booking/BookingDateRates";
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

            <BookingDateRates />
            <BookingContainer />
            <FootingPage />
        </div>
    )
}
