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
import Modal from '../components/Modal';
import PaymentBookingForm from '../feature/Payments/PaymentBookingForm';
import { useReserve } from "../contexts/ReserveRoomContext";
import { useParams } from "react-router-dom";
import axios from "../config/axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function PaymentPage() {
    const { room, getRoomData, price } = useReserve();
    const { roomId } = useParams()
    const [input, setInput] = useState({
        firstName: '',
        lastName: '',
        mobile: '',
        arrival: '',
        departure: ''
    });
    const [file, setFile] = useState(null);

    const navigate = useNavigate();

    const handleSubmitBooking = async () => {
        try {
            const formData = new FormData();

            // for (let key in input) {
            //     if (input[key]) {
            //         formData.append(`${key}`, input[key]);
            //     }
            //     // console.log(formData);
            // }
            formData.append('data', JSON.stringify({ bookArrival: input.arrival, bookDeparture: input.departure, roomId: roomId, paymentSlip: file, total_price: price }))
            await axios.post('/booking/reserve', formData)
            navigate("/")

        }
        catch (error) {
            console.log(error);
        }
    }

    const { login } = useAuth();

    const handdleSubmitForm = e => {
        e.preventDefault();
        login(input).catch(err => {
            toast.error(err.response.data.message)
        })
    };

    useEffect(() => {
        scrollToTop()
        getRoomData(roomId)
    }, [])

    const [isOpen, setIsOpen] = useState(false);

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
                                                    onChange={e => setInput({ ...input, firstName: e.target.value })}
                                                />
                                            </div>

                                            <div className="flex flex-col">
                                                <div className="text-2xl font-semibold">Last name</div>
                                                <PaymentInput
                                                    placeholder=" "
                                                    value={input.lastName}
                                                    onChange={e => setInput({ ...input, lastName: e.target.value })}
                                                />
                                            </div>

                                            <div className="flex flex-col">
                                                <div className="text-2xl font-semibold">Mobile</div>
                                                <PaymentInput
                                                    placeholder=" "
                                                    value={input.mobile}
                                                    onChange={e => setInput({ ...input, mobile: e.target.value })}
                                                />
                                            </div>

                                        </div>

                                        <div className="flex text-light flex-col-6 justify-start gap-10 px-5 ">
                                            <div className="flex gap-5  ">
                                                <div className="flex flex-col text-2xl font-semibold">
                                                    Arrival
                                                    <input type="date" className="text-[#63635D] text-xl font-li rounded-md p-2 w-full h-[60px] outline-none border border-gray-300"
                                                        value={input.arrival ?? (new Date()).getUTCDate()}
                                                        onChange={e => setInput({ ...input, arrival: e.target.value })} />
                                                </div>
                                                <div className="flex flex-col text-2xl font-semibold" >
                                                    Departure
                                                    <input type="date" className="text-[#63635D] text-xl font-li rounded-md p-2 w-full h-[60px] outline-none border border-gray-300"
                                                        value={input.departure}
                                                        onChange={e => setInput({ ...input, departure: e.target.value })} />
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </form>
                            </div>


                            {/* Select a payment method */}
                            <>
                                <div className="flex flex-col  p-5">
                                    <div className="flex justify-start gap-5">
                                        {/* <img src="/src/icons/blue-lock-30.png" alt="lock" className="w-[40px] h-[40px]" /> */}
                                        <h1 className="text-4xl font-li">Payment method</h1>
                                    </div>
                                </div>
                                {/* <div className="bg-white w-full h-[450px] rounded-xl px-5 p-5 outline-none  border-[#21395D] border-8 flex flex-col">
                                    <div className="flex justify-between">
                                        <div className="flex gap-3">
                                            <img src="/src/icons/credit-card-30.png" alt="credit card" className="w-[40px] h-[40px]" />
                                            <span className="text-[#21395D] text-3xl font-semibold mt-0.5">Credit Card</span>
                                        </div>
                                        <div>
                                            <img src="/src/icons/blue-correct-48.png" alt="correct" className="w-[40px] h-[40px]" />
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
                                                    onChange={e => setInput({ ...input, cardNumber: e.target.value })}
                                                />
                                            </div>
                                            <div className="mt-5">
                                                <div className="text-2xl font-semibold">Card holder name</div>
                                                <CreditInput
                                                    type="text"
                                                    placeholder=" "
                                                    value={input.cardName}
                                                    onChange={e => setInput({ ...input, cardName: e.target.value })}
                                                />
                                            </div>
                                            <div className="mt-5">
                                                <div className="text-2xl font-semibold">Expiry date</div>
                                                <CreditInput
                                                    type="number"
                                                    placeholder="MM/YY"
                                                    value={input.expiryDate}
                                                    onChange={e => setInput({ ...input, expiryDate: e.target.value })}
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
                                </div> */}
                            </>

                            <div className="flex flex-col p-5">
                                <div className="flex flex-col">
                                    <div className="text-3xl font-li">Payment Slip</div>
                                    <div className="text-[#C18638] hover:text-[#BD7416] text-xl font-li py-3">Kasikorn Bank / Cheevadeee Hohel : xxx-x-xx99-x </div>
                                </div>
                                {file && <img src={URL.createObjectURL(file)} alt="file" />}
                                <PostSlipHomePage input={input} setInput={setInput} file={file} setFile={setFile} />
                            </div>


                            {/* Optional information */}
                            {/* Terms and Conditions of Booking */}
                            <ConditionsOfBooking />

                            {/* make a booking */}

                            <div className="flex justify-end px-10">
                                <button className="bg-[#C18638] hover:bg-[#BD7416] text-white text-xl px-5 py-3 w-80 rounded-md text-center font-li "
                                    onClick={() => {
                                        handleSubmitBooking()
                                        setIsOpen(true)
                                    }}
                                >
                                    MAKE A BOOKING
                                </button>
                            </div>
                            {/* // Open Modal reserve is successful,Please log in to check your Booking. */}
                            <Modal title="Reserve" open={isOpen} onClose={() => setIsOpen(false)}>
                                <PaymentBookingForm />
                            </Modal>
                        </div>
                    </div>


                    {/* Reservation Summary */}

                    <ReservationCard room={room} arrival={input.arrival} departure={input.departure} />

                </div>
            </div>

            <div className="bg-[#21395D]">
                <div className=" p-20 flex justify-center">
                </div>
            </div>
        </div >
    )
}
