import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

export default function checkBookingPage() {

    const [allBooking, setAllBooking] = useState([]);
    const bookingRoom = allBooking.filter(booking => (booking.bookingStatus))

    useEffectEffect(() => {
        axios
            .get(`/booking/all-mybooking`)
            .then(res => {
                setAllBooking(res.data)
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <div>

        </div>
    )
}
