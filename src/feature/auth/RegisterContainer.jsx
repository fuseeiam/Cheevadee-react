import { useState } from "react";
import Modal from "../../components/Modal";
import RegisterForm from "./RegisterForm";

export default function RegisterContainer() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="flex justify-center">
            <button className="bg-[#C18638] hover:bg-[#BD7416] text-white text-xl py-2.5 w-full rounded-md text-center font-li"
                onClick={() => setIsOpen(true)}
            >
                Create new account
            </button>
            <Modal title="Sign up" open={isOpen} onClose={() => setIsOpen(false)}>
                <RegisterForm />
            </Modal>
        </div >
    )
}