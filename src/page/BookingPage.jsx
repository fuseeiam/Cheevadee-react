import FootingPage from "../feature/ProfilePage/footingPage";
import BookingContainer from "../feature/Booking/BookingContainer";
// import BookingHeader from "../Layout/BookingHeader";
import Bookingdate from "../feature/Booking/Bookingdate";
import { Link } from "react-router-dom";

export default function BookingPage() {
    return (
        <div>
            {/* Booking Header */}
            <div>
                {/* <BookingHeader /> */}
            </div>

            {/* Traval Date Booking */}
            <div>
                <Bookingdate />
            </div>

            <div >
                {/* Booking container */}
                <div>
                    < BookingContainer />
                </div>
            </div>

            <div>
                <FootingPage />
            </div>
        </div>
    )
}
