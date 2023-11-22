import React from 'react';
import { useAuth } from '../../hooks/use-auth';
// import SideBar from '../../components/adminUI/SideBar';
import axios from '../../config/axios';
import { useState, useEffect, } from 'react';
import useDropdown from '../../hooks/use-dropdown';


import CheckPaymentCard from '../../components/adminUI/CheckPaymentCard';

export default function AdminPage() {
    const { user } = useAuth();
    console.log(user?.firstName);

    const [allBooking, setAllBooking] = useState([]);

    useEffect(() => {
        getBook();
    }, []);

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
                <CheckPaymentCard key={el.id} bookingObj={el} />

            ))}


        </div>

    );
}




