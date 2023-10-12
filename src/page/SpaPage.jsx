import Header from "../Layout/Header";
import FootingPage from "../feature/ProfilePage/footingPage";
import { Link } from "react-router-dom";

export default function SpaPage() {
    return (

        <div>
            <div>
                <Header />
            </div>
            <div>
                SpaPage
            </div>
            <div>
                <FootingPage />
            </div>
        </div>
    )
}
