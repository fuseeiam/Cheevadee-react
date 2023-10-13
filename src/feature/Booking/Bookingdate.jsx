import { Link } from "react-router-dom"

export default function BookingDate() {
    return (
        <div>
            <div className="bg-[#21395D] w-full h-60">
                <div>
                    <div className="text-white text-2xl flex gap-10 py-12 mx-40">
                        Travel Date
                    </div>
                    <div className=" text-light flex flex-col-6 justify-start gap-10 mx-40">
                        <div className="flex gap-10 ">
                            <div className="text-white flex flex-col">
                                ARRIVAL
                                <input type="date" className="text-[#63635D] rounded-md p-2" />
                            </div>
                            <div className="text-white flex flex-col" >
                                DEPARTURE
                                <input type="date" className="text-[#63635D] rounded-md p-2" />
                            </div>
                            <div className="text-white flex flex-col w-40" >
                                ROOM(S)
                                <select className="text-[#63635D] rounded-md p-2.5">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </div>
                            <div className="text-white flex flex-col w-40" >
                                ADULT(S)
                                <select className="text-[#63635D] rounded-md p-2.5">
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
                            <div className="text-white flex flex-col w-40" >
                                CHILD(REN)
                                <select className="text-[#63635D] rounded-md p-2.5">
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
                        <Link to="booking/:reserve">
                            <div className=" py-3.5 ">
                                <button className="bg-[#C18638] hover:bg-[#BD7416] text-white font-li w-200 h-15 px-3 py-3.5 rounded-md ">
                                    SEARCH
                                </button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
