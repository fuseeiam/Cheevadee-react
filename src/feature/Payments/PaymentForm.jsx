import { useState } from "react";
import { toast } from "react-toastify";
import LoginButton from "../../feature/auth/LoginButton";
import PaymentInput from "../../feature/Payments/PaymentInput";
import { useAuth } from "../../hooks/use-auth";

export default function PaymentForm() {
    const [input, setInput] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobile: ''

    });

    const { login } = useAuth();

    const handdleSubmitForm = e => {
        e.preventDefault();
        login(input).catch(err => {
            toast.error(err.response.data.message)
        })
    };

    return (
        <form className="grid gap-4" onSubmit={handdleSubmitForm}>

            <PaymentInput
                placeholder="Email address or phone number"
                value={input.emailOrMobile}
                onchange={e => setInput({ ...input, emailOrMobile: e.target.value })}
            />

            <PaymentInput
                type="password"
                placeholder="password"
                value={input.password}
                onchange={e => setInput({ ...input, password: e.target.value })}
            />

            <LoginButton />


        </form>
    );
}
