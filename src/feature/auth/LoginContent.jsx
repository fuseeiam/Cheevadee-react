import { Link } from "react-router-dom";
import LogoHomePage from "../ProfilePage/LogoHomePage"
export default function LoginContent() {
    return (
        <div>
            <div>
                <img
                    src="/src/assets/Logo1.png"
                    className="h-[500px] w-[500px]"
                    alt="Cheevadeehotel-logo"
                />
            </div>
            <Link to="/">
                <LogoHomePage />
                {/* <h2 className="text-4xl font-light text-center">
                    CHEEVA DEE HOTEL
                </h2> */}
            </Link>

        </div>
    );
}