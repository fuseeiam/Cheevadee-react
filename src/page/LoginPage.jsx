import LoginContent from "../feature/auth/LoginContent";
import LoginForm from "../feature/auth/LoginForm";
import RegisterContainer from "../feature/auth/RegisterContainer";
import { Link } from "react-router-dom";


export default function LoginPage() {

    return (
        <div>
            <div className="mx-10 pt-10 flex flex-col items-center ">
                <LoginContent />
            </div>
            <div className="mt-10 pt-10 self-stretch min-[900px]:mt-0 min-[900px]:basis-[24.75rem]">
                <div className="mx-auto max-w-[24.75rem] bg-white rounded-lg shadow-[0_0_15px_rgb(0_0_0_/0.2)] mb-6 p-4">
                    <LoginForm />
                    <hr className="border-gray-500 my-4" />
                    <RegisterContainer />
                </div>
            </div>
        </div>
    )
}
