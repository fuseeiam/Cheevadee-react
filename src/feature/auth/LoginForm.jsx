import { useState } from "react";
import { toast } from "react-toastify";
import LoginButton from "./LoginButton";
import LoginInput from "./LoginInput";
import { useAuth } from "../../hooks/use-auth";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
    const [input, setInput] = useState({
        emailOrMobile: '',
        password: ''
    });

    const navigate = useNavigate()

    const { login } = useAuth();

    const handdleSubmitForm = async e => {
        e.preventDefault();
        const user = await login(input)
        console.log(user.role, "AAA");
        if (user.role === "ADMIN") {
            console.log("ADMIN");
            navigate("/auth/admin")
        }
    };

    return (
        <form className="grid gap-4" onSubmit={handdleSubmitForm}>

            <LoginInput
                placeholder="Email address or phone number"
                value={input.emailOrMobile}
                onchange={e => setInput({ ...input, emailOrMobile: e.target.value })}
            />

            <LoginInput
                type="password"
                placeholder="password"
                value={input.password}
                onchange={e => setInput({ ...input, password: e.target.value })}
            />

            <LoginButton />


        </form>
    );
}
