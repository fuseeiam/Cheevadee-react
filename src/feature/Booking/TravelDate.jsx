import CheckAvailableButton from "../../feature/Booking/CheckAvailableButton";

export default function TravelDate() {
    return (
        <div>
            <div className="bg-[#E2E2E2] w-full h-60">
                <div>
                    <div className="text-[#63635D] text-2xl flex gap-10 py-12 mx-40">
                        Travel Date
                    </div>
                    <div className="text-[#63635D] text-light flex flex-col-6 justify-between mx-40">
                        <div className="flex gap-10 ">
                            <div className="flex flex-col">
                                ARRIVAL
                                <input type="date" className="rounded-md p-2" />
                            </div>
                            <div className="flex flex-col" >
                                DEPARTURE
                                <input type="date" className="rounded-md p-2" />
                            </div>
                            <div className="flex flex-col w-40" >
                                ROOM(S)
                                <select className="rounded-md p-2.5">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </div>
                            <div className="flex flex-col w-40" >
                                ADULT(S)
                                <select className="rounded-md p-2.5">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                </select>
                            </div>
                            <div className="flex flex-col w-40" >
                                CHILD(REN)
                                <select className="rounded-md p-2.5">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </div>
                            {/* <div className="flex flex-col w-40" >
                                PROMO CODE
                                <input type="text" className="rounded-md p-2" />
                            </div> */}
                        </div>
                        <div className="px-20 py-2.5">
                            <CheckAvailableButton />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
