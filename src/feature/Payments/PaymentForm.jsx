import { useState } from "react";
import { toast } from 'react-toastify';
import PaymentInput from "../../feature/Payments/PaymentInput";
import Joi from 'joi';
import InputErrorMessage from "../../feature/auth/InputErrorMessage";
import { useAuth } from "../../hooks/use-auth";

const registerSchema = Joi.object({
    firstName: Joi.string().trim().required(),
    lastName: Joi.string().trim().required(),
    email: Joi.string().email({ tlds: false }),
    mobile: Joi.string().pattern(/^[0-9]{10}$/)
        .required()
        .strip(),
    password: Joi.string()
        .pattern(/^[a-zA-Z0-9]{6,30}$/)
        .trim()
        .required(),
    confirmPassword: Joi.string().valid(Joi.ref('password')).trim().required().strip(),
});

const validateRegister = input => {
    const { error } = registerSchema.validate(input, { abortEarly: false });

    if (error) {

        const result = error.details.reduce((acc, el) => {
            const { message, path } = el
            acc[el.path[0]] = message;
            return acc;
        }, {});
        return result;
    }
};

export default function PaymentForm() {
    const [input, setInput] = useState({
        firstName: '',
        lastName: '',
        mobile: ''
    });

    const [error, setError] = useState({

    });

    const { register } = useAuth();

    const handleChangeInput = e => {
        setInput({ ...input, [e.target.name]: e.target.value });

    };

    const handdleSubmitForm = e => {
        e.preventDefault();
        const validationError = validateRegister(input);
        if (validationError) {
            return setError(validationError);
        }
        setError({});
        register(input).catch(err => {
            toast.error(err.response?.data.message);
        });
    };

    return <form className="grid grid-cols-2 gap-x-3 gap-y-4"
        onSubmit={handdleSubmitForm}
    >
        <div>
            <PaymentInput
                placeholder="First name"
                value={input.firstName}
                onChange={handleChangeInput}
                name="firstName"
                hasError={error.firstName}
            />
            {error.firstName && <InputErrorMessage message={error.firstName} />}
        </div>

        <div>
            <PaymentInput placeholder="Last name"
                value={input.lastName}
                onChange={handleChangeInput}
                name="lastName"
                hasError={error.lastName}
            />
            {error.lastName && <InputErrorMessage message={error.lastName} />}
        </div>

        <div className="col-span-full">
            <PaymentInput placeholder="mobile number"
                value={input.email}
                onChange={handleChangeInput}
                name="mobile"
                hasError={error.mobile}
            />
            {error.mobile && <InputErrorMessage message={error.mobile} />}
        </div>
        {/*         
        <div className="mx-auto col-span-full">
            <button className="bg-[#C18638] hover:bg-[#BD7416] rounded-lg text-white px-3 py-1.5 font-light min-w-[10rem]">
                Sign up
            </button>
        </div> */}
    </form>
}