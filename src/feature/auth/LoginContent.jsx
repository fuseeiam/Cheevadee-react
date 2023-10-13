import { Link } from "react-router-dom";
import LogoHomePage from "../ProfilePage/LogoHomePage";

export default function LoginContent() {

    return (
        <div>
            <img
                src="/src/assets/Logo1.png"
                className="h-[300px] w-[300px]"
                alt="Cheevadeehotel-logo"
            />
            <Link to="/">
                <LogoHomePage />
            </Link>
        </div>
    );
}