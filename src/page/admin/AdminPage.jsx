import React from 'react';
import { useAuth } from '../../hooks/use-auth';
// import SideBar from '../../components/adminUI/SideBar';
import axios from '../../config/axios';
import { useState, useEffect, } from 'react';
import useDropdown from '../../hooks/use-dropdown';

export default function AdminPage() {
    const { user } = useAuth();
    console.log(user?.firstName);

    // const [allBooking, setAllBooking] = useState([]);
    // const [filterBooking, setFilterBooking] = useState([]);

    // const [noti, setNoti] = useState([]);

    // const { isOpen, setIsOpen, dropDownEl } = useDropdown();

    // const [searchUser, setSearchUser] = useState("");
    // const handleInput = (e) => {
    //     setSearchUser(e.target.value);
    // };
    // let filterBook = [...filterBooking];
    // if (searchUser) {
    //     filterBook = filterBooking.filter((el) => {
    //         if (el.title.toLowerCase().includes(searchUser.toLowerCase())) {
    //             return true;
    //         }
    //         return false;
    //     });
    // }

    // useEffect(() => {
    //     getBook();
    // }, []);


    // const getBook = async () => {
    //     const res = await axios
    //         .get("/Booking")
    //         .then((res) => {
    //             setAllBooking(res.data.allBooking);
    //             setFilterBooking(res.data.allBooking);
    //         })
    //         .catch((error) => console.log(error));
    //     return res;
    // };

    // const countReview = async () => {
    //     const wait = await axios
    //         .get("/work/waitreview")
    //         .then((res) => setNoti(res.data.reviewWork))
    //         .catch((error) => console.log(error));
    //     return wait;
    // };

    // const status = (status = "all") => {
    //     if (status === "all") {
    //         setFilterBooking(allBooking);
    //     } else {
    //         let filterBooking = allBooking.filter((item) => item.statusBooking === status);
    //         setFilterBooking(filterBooking);
    //     }
    // };


    return (
        <div>
            <div className="absolute top-0 w-full h-full bg-slate-200 flex flex-col gap-5 items-center justify-evenly -z-20">
                <div className="flex flex-col  w-full border-3 border-red -z-50 ">
                    <div className="flex gap-4 items-center justify-start p-6 pb-2 border-3 border-green -z-50 bg-black">
                        <div className="flex">
                            <input
                                type="text"
                                placeholder="search for..."
                                className="p-2 text-primaryDarker rounded-xl w-72 px-5"
                            // onChange={handleInput}
                            />
                        </div>
                        <div
                            className="text-[#C18638] hover:underline cursor-pointer rounded-xl"
                            onClick={() => status("allBooking")}
                        >
                            All
                        </div>
                        <div
                            className="text-[#C18638] hover:underline cursor-pointer rounded-xl"
                            onClick={() => status("adminWaiting")}
                        >
                            WAITING
                        </div>

                        <div
                            className="text-[#C18638] hover:underline cursor-pointer rounded-xl"
                            onClick={() => status("adminCompleted")}
                        // ref={dropDownEl}
                        >
                            COMPLETED
                        </div>

                        <div
                            className="text-[#C18638] hover:underline cursor-pointer rounded-xl"
                            onClick={() => status("adminCancel")}
                        // ref={dropDownEl}
                        >
                            CANCEL
                        </div>

                        {/* {noti.length === 0 ? (
                            ""
                        ) : (
                            <p className=" relative flex justify-center items-center bg-secondary rounded-full font-serif right-[242px] bottom-3.5 w-7 h-7 text-textWhite">
                                {noti.length}
                            </p>
                        )} */}
                        {/* <div className="relative">
                            <AdminSelectBookingModal
                                open={isOpen}
                                onClose={() => setIsOpen(false)}
                                status={status}
                            />
                        </div> */}
                    </div>
                    {/* <div className=" flex flex-col justify-center items-center ">
                        <p className="text-xs px-5 w-full flex justify-end">
                            count : {filterBooking.length}
                        </p>
                        {filterWork.map((el) => (
                            <AdminBookingCard key={el.id} bookingObj={el} />
                        ))}
                    </div> */}
                </div>

            </div>
        </div>
    );
}




