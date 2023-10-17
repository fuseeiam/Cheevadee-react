import { Link } from "react-router-dom";
// import PaymentFrom from "../feature/Payments/PaymentForm";
import { useState } from "react";
import PaymentInput from "../feature/Payments/PaymentInput";
import CreditInput from "../feature/Payments/CreditInput";
import { useAuth } from "../hooks/use-auth";
import { useEffect } from "react";
import { scrollToTop } from "../utils/scrollToTop";
import MyBooking from "./MyBooking";


export default function PaymentPage() {
    const [input, setInput] = useState({
        firstName: '',
        lastname: '',
        email: '',
        mobile: '',
        password: ''
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
            {/* <PaymentFrom /> */}
            <div className="bg-[#21395D] py-20 ">

            </div>

            {/* Back to Booking */}
            <div className="bg-[#21395D] flex justify-between">
                <Link to="/booking">
                    <div className="flex px-40 gap-2.5 ">
                        <img src="/src/icons/white-arrow-30.png" alt="" className="w-[30px] h-[30px]" />
                        <span className="text-white text-2xl font-light">Back</span>
                    </div>
                </Link>

                <div className="flex gap-2.5 flex-1 justify-center">
                    <img src="/src/icons/white-lock-30.png" alt="" />
                    <span className="text-white text-2xl font-light">Secure booking (It only takes 2 minutes)</span>
                </div>

                <div className="flex gap-2.5 px-40">
                    <span className="text-white text-2xl font-light">Step :</span>
                    <button className="bg-[#D4D4D4] hover:bg-[#63635D] text-white text-xl  w-[35px] h-[35px] rounded-md text-center font-bold">
                        1
                    </button>
                    <button className="bg-[#C18638] hover:bg-[#BD7416] text-white text-xl  w-[35px] h-[35px] rounded-md text-center font-bold">
                        2
                    </button>
                    <button className="bg-[#D4D4D4] hover:bg-[#63635D] text-white text-xl  w-[35px] h-[35px] rounded-md text-center font-bold">
                        3
                    </button>
                </div>

            </div>

            <div>

                {/* Enter your details */}
                <div className="bg-[#21395D] flex justify-center px-40 py-10 gap-10">
                    <div className="bg-white w-full  h-[2080px] rounded-md p-5 outline-none border border-gray-300 flex ">
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

                                        <div className="flex gap-5 p-5">
                                            <div className="flex flex-col">
                                                <div className="text-2xl font-semibold">E-mail</div>
                                                <PaymentInput
                                                    placeholder=" "
                                                    value={input.email}
                                                    onchange={e => setInput({ ...input, email: e.target.value })}
                                                />
                                            </div>
                                            <div className="flex flex-col">
                                                <div className="text-2xl font-semibold">Password</div>
                                                <PaymentInput
                                                    type="password"
                                                    placeholder=" "
                                                    value={input.password}
                                                    onchange={e => setInput({ ...input, password: e.target.value })}
                                                />
                                            </div>
                                            <div className="flex flex-col">
                                                <div className="text-2xl font-semibold">Confirm password</div>
                                                <PaymentInput
                                                    type="password"
                                                    placeholder=" "
                                                    value={input.password}
                                                    onchange={e => setInput({ ...input, password: e.target.value })}
                                                />
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

                            {/* Optional information */}
                            <div className="flex flex-col p-5">
                                <div className="flex flex-col">
                                    <div className="text-4xl font-li py-3">Your special request</div>
                                    <PaymentInput
                                        placeholder="eg. bed preference, pick-up or drop-off location"
                                        value={input.specialRequest}
                                        onchange={e => setInput({ ...input, specialRequest: e.target.value })}
                                    />
                                </div>
                                <div className="text-[#BD7416] text-xl font-li py-3">* Special request is not guaranteed. Your request will be taken care where possible.</div>
                            </div>

                            {/* Terms and Conditions of Booking */}
                            <div className="flex flex-col p-5">
                                <div className="text-4xl font-li">Terms and Conditions of Booking</div>

                                <div className="text-xl font-li p-5">
                                    <h1 className="text-2xl font-semibold py2.5"> General Terms & Conditions</h1>
                                    <li>All reservations must be guaranteed with a valid credit card.</li>
                                    <li>"Non-Refundable" and "All Special Packages", advanced full payment will be charged at time of reservation, No cancellation and Non-Refundable.</li>
                                    <li>"Best Rate Available" free cancellation window, cancellation policy and cancellation penalty are depend on Seasonal.</li>
                                    <li>All No show and Early Departure 100 percent of total amount will be charged. Will result in a penalty of the total amount of the full length of stay of the booking.</li>
                                    <li>We reserve the right to cancel or modify reservations where it appears that a guest has engaged in fraudulent, inappropriate activity, or under other circumstances where it appears that the reservations contain or resulted from a mistake or error.</li>
                                    <li>Amendment or Cancellation must be made in written notice to provided email or contact form in the website.</li>
                                    <li>Rates are charged in Thai Baht currency. Therefore, the amount shown on monthly statement in other currencies sent to you by the respective credit card company might be slightly different from our quoted price due to exchange rate variations.</li>
                                </div>


                                <div className="flex flex-col text-xl font-li p-5">
                                    <h1 className="text-2xl font-semibold py2.5 ">Extra Person</h1>
                                    <div className=" flex flex-col px-20">
                                        <span>Adult : Compulsory charge at 2,200 THB / night provided with extra bed and breakfast.</span>
                                        <span>Child : Age 0 - 3 years old is free of charge (share bed with parent)</span>
                                        <span>Child : Age 4 – 11 years old compulsory charge at 1,100 THB / night provided with extra bed and breakfast.</span>
                                        <span> Child over 12 years old consider to be adult. </span>
                                    </div>
                                    <span className="font-semibold">***One Bedroom Emperor Suite does not allow children aged below 12 years to stay in. </span>
                                </div>

                                <div className="flex flex-col justify-start text-xl font-li p-5">
                                    <div className="text-2xl font-semibold py2.5 ">Hotel Policy</div>
                                    <div className="flex gap-10">
                                        <div className="text-xl font-semibold">
                                            <h2>Check-in time:</h2>
                                            <h2>Check-out time:</h2>
                                            <h2>Pet policy:</h2>
                                            <h2>Smoking policy:</h2>
                                        </div>
                                        <div className="flex flex-col">
                                            <span>14:00 Hrs.</span>
                                            <span>12:00 Hrs.</span>
                                            <span>Pets are not allowed.</span>
                                            <span>Smoking is not allowed in the hotel.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex px-10 gap-3">
                                <div className="py-1">
                                    <input type="checkbox" className=" bg-[#E2E2E2] hover:bg-[#BD7416] w-[20px] h-[20px] rounded-sm"></input>
                                </div>
                                <div className="text-xl font-li ">
                                    <h2>I have read and agreed to the
                                        <span className="text-[#C18638]"> Terms & Conditions</span>
                                    </h2>
                                </div>
                            </div>

                            {/* make a booking */}
                            <Link to="myBooking">
                                <div className="flex justify-end px-10">
                                    <button className="bg-[#C18638] hover:bg-[#BD7416] text-white text-xl px-5 py-3 w-80 rounded-md text-center font-li ">
                                        MAKE A BOOKING
                                    </button>
                                </div>
                            </Link>
                        </div>
                    </div>


                    {/* Reservation Summary */}

                    <div className="bg-white w-[750px] h-[820px] rounded-md p-5 outline-none border border-gray-300 flex ">

                        {/* Title */}
                        <div className="flex flex-col p-5">
                            <div className="flex justify-start">
                                <h1 className="text-4xl font-li">Reservation Summary</h1>
                            </div>

                            <div className=" flex mt-5 gap-5">
                                <img src="/src/assets/Logo1.png" alt="" className="w-[100px] h-[100px] " />
                                <div className="flex flex-col">
                                    <span className="text-2xl font-semibold">
                                        CHEEVA DEE HOTEL
                                    </span>
                                    <span className="text-2xl font-li">
                                        Chiang Mai, THAILAND
                                    </span>
                                    <div className="flex gap-1">
                                        <img src="/src/icons/star-48.png" alt="" className="w-[30px] h-[30px]" />
                                        <img src="/src/icons/star-48.png" alt="" className="w-[30px] h-[30px]" />
                                        <img src="/src/icons/star-48.png" alt="" className="w-[30px] h-[30px]" />
                                        <img src="/src/icons/star-48.png" alt="" className="w-[30px] h-[30px]" />
                                    </div>
                                </div>
                            </div>

                            {/* Traval date */}
                            <div className="flex p-5 text-xl gap-1">
                                <div className="font-bold">2 nights :</div>
                                {/* ARRIVAL */}
                                <div className="fond-li">09/11/2023</div>
                                <div className="fond-li">-</div>
                                {/* DEPARTURE */}
                                <div className="fond-li">11/11/2023</div>
                            </div>

                            {/* room detail */}
                            <div className="bg-[#E2E2E2] w-[450px] h-[180px] rounded-md outline-none border border-gray-300 flex flex-col p-5 text-xl">
                                {/* Room Type */}
                                <div>STANDRAD ROOM - No Window</div>
                                {/* details */}
                                <div className="hover:text-[#BD7416] hover:underline font-semibold mt-2.5" >2 adults</div>
                                <div className="hover:text-[#BD7416] hover:underline font-semibold mt-2.5" >2 twin beds</div>
                                <div className="flex justify-between">
                                    <div className="text-[#C18638] hover:text-[#BD7416] hover:underline font-li mt-2.5" >view details / edit</div>
                                    <div className="flex text-2xl font-semibold mt-1.5 gap-2">
                                        <span>THB</span>
                                        {/* price */}
                                        <span>2,450</span>
                                    </div>
                                </div>
                            </div>

                            {/* total price */}
                            <div className="bg-[#D4D4D4] w-[450px] h-[160px] rounded-md outline-none border border-gray-300 flex flex-col p-5 text-xl mt-5">
                                <div className="flex flex-col ">
                                    <span className="text-2xl font-semibold py-2">Total</span>

                                    <div className="flex flex-col items-end  ">
                                        <div className="flex gap-2">
                                            <span className="text-2xl font-semibold py-2">THB</span>
                                            <span className="text-4xl font-bold ">4,900</span>
                                        </div>
                                        <span className="text-xl font-li">including all taxes and service charge</span>
                                    </div>
                                </div>
                            </div>

                            {/* pay */}
                            <div className="flex justify-between p-5 text-2xl font-li">
                                <span>Pay now</span>
                                <div className="flex gap-2">
                                    <span>THB</span>
                                    <span>4,900</span>
                                </div>
                            </div>
                            <hr />
                            <div className="flex justify-between p-5 text-2xl font-li">
                                <span>Pay at the hotel</span>
                                <div className="flex gap-2">
                                    <span>THB</span>
                                    <span>0</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#21395D]">
                <div className=" p-20 flex justify-center">
                </div>
            </div>
        </div>
    )
}
