import { Link } from "react-router-dom";

export default function FootingPage() {
    return (
        <div>
            <div className="bg-[#63635D] w-full h-60">
                <div className="flex px-40 py-10 text-white text-xl font-light justify-between">
                    <Link to="/">
                        <div>
                            <h1 className="text-2xl">
                                CHEEVA DEE HOTEL
                            </h1>
                        </div>
                    </Link>

                    <div className="flex flex-col">
                        <h1>
                            TELEPHONE
                        </h1>
                        <span className="text-lg pt-6">
                            Hotel 053 283 959
                        </span>
                    </div>

                    <div className="flex flex-col">
                        <h1>
                            EMAIL
                        </h1>
                        <span className="text-lg pt-6">
                            reservations@cheevadee.com
                        </span>

                    </div>

                    <div className="flex flex-col">
                        <h1>
                            ADDRESS
                        </h1>
                        <span className="text-lg pt-6">
                            No. 9 Soi 9 Rachamankha rd., Phra Singh.,<br />
                            Old City, Chiang Mai, Thailand, 50200
                        </span>
                    </div>

                </div>

            </div>
        </div>
    )
}
