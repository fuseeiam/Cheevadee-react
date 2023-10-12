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
            </Link>

        </div>
    );
}