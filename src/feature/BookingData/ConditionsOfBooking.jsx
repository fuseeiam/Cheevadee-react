
export default function ConditionsOfBooking() {
    return (
        <div> <div className="flex flex-col p-5">
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
            </div></div>
    )
}
