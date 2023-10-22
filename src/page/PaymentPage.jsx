import { Link } from "react-router-dom";
import { useState } from "react";
import PaymentInput from "../feature/Payments/PaymentInput";
import CreditInput from "../feature/Payments/CreditInput";
import { useAuth } from "../hooks/use-auth";
import { useEffect } from "react";
import { scrollToTop } from "../utils/scrollToTop";
import PostSlipHomePage from '../feature/Payments/PostSlipHomepage';
import ConditionsOfBooking from '../feature/BookingData/ConditionsOfBooking';
import BookingHeader from '../feature/BookingData/BookingHeader';
import ReservationCard from '../feature/BookingData/ReservationCard';

export default function PaymentPage() {
    const [input, setInput] = useState({
        firstName: '',
        lastname: '',
        mobile: ''
    });

    const { login } = useAuth();

    const handdleSubmitForm = e => {
        e.preventDefault();
        login(input).catch(err => {
            toast.error(err.response.data.message)
        })
    };

    useEffect(() => {
        scrollToTop()
    }, [])

    return (
        <div>
            <div className="bg-[#21395D] py-20 ">
            </div>

            {/* Back to Booking */}
            <BookingHeader />

            {/* Enter your details */}
            <div>
                <div className="bg-[#21395D] flex justify-center px-40 py-10 gap-10">
                    <div className="bg-white w-full  h-full rounded-md p-5 outline-none border border-gray-300 flex ">
                        <div className="flex flex-col">
                            <div>
                                <div className="flex flex-col p-5">
                                    <div className="flex justify-start">
                                        <h1 className="text-4xl font-li">Enter your details</h1>
                                    </div>
                                </div>
                                <form className="grid gap-4" onSubmit={handdleSubmitForm}>
                                    <div className="flex flex-col">

                                        <div className="flex gap-5 p-5">
                                            <div className="flex flex-col">
                                                <div className="text-2xl font-semibold">First name</div>
                                                <PaymentInput
                                                    placeholder=" "
                                                    value={input.firstName}
                                                    onchange={e => setInput({ ...input, firstName: e.target.value })}
                                                />
                                            </div>

                                            <div className="flex flex-col">
                                                <div className="text-2xl font-semibold">Last name</div>
                                                <PaymentInput
                                                    placeholder=" "
                                                    value={input.lastName}
                                                    onchange={e => setInput({ ...input, lastName: e.target.value })}
                                                />
                                            </div>

                                            <div className="flex flex-col">
                                                <div className="text-2xl font-semibold">Mobile</div>
                                                <PaymentInput
                                                    placeholder=" "
                                                    value={input.mobile}
                                                    onchange={e => setInput({ ...input, mobile: e.target.value })}
                                                />
                                            </div>

                                        </div>

                                        <div className="flex text-light flex-col-6 justify-start gap-10 px-5 ">
                                            <div className="flex gap-5  ">
                                                <div className="flex flex-col text-2xl font-semibold">
                                                    Arrival
                                                    <input type="date" className="text-[#63635D] text-xl font-li rounded-md p-2 w-full h-[60px] outline-none border border-gray-300" />
                                                </div>
                                                <div className="flex flex-col text-2xl font-semibold" >
                                                    Departure
                                                    <input type="date" className="text-[#63635D] text-xl font-li rounded-md p-2 w-full h-[60px] outline-none border border-gray-300" />
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </form>
                            </div>


                            {/* Select a payment method */}
                            <div className="flex flex-col  p-5">
                                <div className="flex justify-start gap-5">
                                    <img src="/src/icons/blue-lock-30.png" alt="" className="w-[40px] h-[40px]" />
                                    <h1 className="text-4xl font-li">Select a payment method</h1>
                                </div>
                            </div>
                            <div className="bg-white w-full h-[450px] rounded-xl px-5 p-5 outline-none  border-[#21395D] border-8 flex flex-col">
                                <div className="flex justify-between">
                                    <div className="flex gap-3">
                                        <img src="/src/icons/credit-card-30.png" alt="" className="w-[40px] h-[40px]" />
                                        <span className="text-[#21395D] text-3xl font-semibold mt-0.5">Credit Card</span>
                                    </div>
                                    <div>
                                        <img src="/src/icons/blue-correct-48.png" alt="" className="w-[40px] h-[40px]" />
                                    </div>
                                </div>
                                <div className="flex gap-5">
                                    <div className="flex flex-col mt-5">
                                        <div className="mt-5">
                                            <div className="text-2xl font-semibold">Card number</div>
                                            <CreditInput
                                                type="number"
                                                placeholder=" "
                                                value={input.cardNumber}
                                                onchange={e => setInput({ ...input, cardNumber: e.target.value })}
                                            />
                                        </div>
                                        <div className="mt-5">
                                            <div className="text-2xl font-semibold">Card holder name</div>
                                            <CreditInput
                                                type="text"
                                                placeholder=" "
                                                value={input.cardName}
                                                onchange={e => setInput({ ...input, cardName: e.target.value })}
                                            />
                                        </div>
                                        <div className="mt-5">
                                            <div className="text-2xl font-semibold">Expiry date</div>
                                            <CreditInput
                                                type="number"
                                                placeholder="MM/YY"
                                                value={input.expiryDate}
                                                onchange={e => setInput({ ...input, expiryDate: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex flex-col p-5 mt-5">
                                            <span className="text-2xl font-semibold">We accept the following payment methods</span>
                                            <div className="flex gap-3">
                                                <img src="/src/icons/visa-card-48.png" alt="" className="w-[60px] h-60px]" />
                                                <img src="/src/icons/mastercard-48.png" alt="" className="w-[60px] h-60px]" />
                                                <img src="/src/icons/jcb-48.png" alt="" className="w-[60px] h-60px]" />
                                                <img src="/src/icons/unionpay-48.png" alt="" className="w-[60px] h-60px]" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col p-5">
                                            <span className="text-2xl font-semibold">Booking with confidence</span>
                                            <div className="flex gap-3">
                                                <img src="/src/icons/blue-correct-48.png" alt="" className="w-[25px] h-[25px]" />
                                                <span className="text-xl font-li">Your credit card details are safe via this secured payment form</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="flex flex-col p-5">
                                <div className="flex flex-col">
                                    <div className="text-3xl font-li">Payment Slip</div>
                                    <div className="text-[#BD7416] text-xl font-li py-3">Kasikorn Bank / Cheevadeee Hohel : xxx-x-xx99-x </div>
                                </div>
                                <PostSlipHomePage />
                            </div>


                            {/* Optional information */}
                            {/* Terms and Conditions of Booking */}
                            <ConditionsOfBooking />

                            {/* make a booking */}
                            <Link
                            // Open Modal reserve success and please log in to check Booking
                            >
                                <div className="flex justify-end px-10">
                                    <button className="bg-[#C18638] hover:bg-[#BD7416] text-white text-xl px-5 py-3 w-80 rounded-md text-center font-li ">
                                        MAKE A BOOKING
                                    </button>
                                </div>
                            </Link>
                        </div>
                    </div>


                    {/* Reservation Summary */}
                    <ReservationCard />

                </div>
            </div>

            <div className="bg-[#21395D]">
                <div className=" p-20 flex justify-center">
                </div>
            </div>
        </div >
    )
}
