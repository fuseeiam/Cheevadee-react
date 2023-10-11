
export default function ProfileHomPage() {
    return (
        <div>
            <div className="bg-[#21395D] flex justify-center p-20 ">
                <div className="w-[1110px] h-[740px] object-cover overflow-hidden ">
                    <img src="/src/assets/hotel-2.png" alt="" className=" w-full" />
                </div>
            </div>

            <div className="bg-[#21395D] px-20 flex gap-20">
                <div>
                    <img src="/src/assets/hotel-3.png" alt="" className=" w-[700px] h-[700px]" />
                </div>
                <div className=" w-1/2 ">
                    <div>
                        <h1 className="text-[#C18638] text-4xl">
                            Welcome to Cheeva Dee Hotel
                            located within the heart of
                            the Old City of Chiang Mai.
                        </h1>
                    </div>

                    <div className="mt-6">
                        <span className="text-white text-xl">
                            In addition to the standard of SHA, all guests get free Wi-Fi in all rooms and free parking if arriving by car.
                            Strategically situated in Old City, allowing you access and proximity to local attractions and sights.
                            Don't leave before paying a visit to the famous Wat Chedi Luang. Rated with 4 stars,this high-quality property provides guests with access to indoor pool and outdoor pool on-site.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
