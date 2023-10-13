import Header from "../Layout/Header";
import FootingPage from "../feature/ProfilePage/footingPage";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { scrollToTop } from "../utils/scrollToTop";

export default function RoomTypePage() {
    useEffect(() => {
        scrollToTop()
    }, [])
    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                RoomType
            </div>
            <div>
                <FootingPage />
            </div>
        </div>
    )
}
