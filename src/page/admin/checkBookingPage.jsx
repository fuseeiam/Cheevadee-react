import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from '../../config/axios';
import CheckBookingCard from '../../components/adminUI/CheckBookingCard';

export default function CheckBookingPage() {

    const [allBooking, setAllBooking] = useState([]);
    const [toggle, setToggle] = useState(false);
    useEffect(() => {
        getBook();
    }, [toggle]);
    console.log('allBooking', allBooking);
    const getBook = async () => {
        const res = await axios
            .get("/admin/checkbooking")
            .then((res) => {
                setAllBooking(res.data.allBooking);
            })
            .catch((error) => console.log(error));
        return res;
    };

    return (
        <div className="w-full h-full bg-slate-200 flex flex-col gap-5 flex-1 ">

            {allBooking.map((el) => (
                <CheckBookingCard key={el.id} bookingObj={el} toggle={toggle} setToggle={setToggle} />
            ))}
        </div>
    )
}
