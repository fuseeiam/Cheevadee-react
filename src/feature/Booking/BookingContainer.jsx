import StandardBookingCard from "../BookingRoomType/StandardBookingCard";
import SuperiorBookingCard from "../BookingRoomType/SuperiorBookingCard";
import DeluxeBookingCard from "../BookingRoomType/DeluxeBookingCard";
import JuniorSuiteBookingCard from "../BookingRoomType/JuniorSuiteBookingCard";
import { useState, useEffect } from "react";
import axios from "../../config/axios";
import { data } from "autoprefixer";

export default function BookingContainer() {
    const [allRoom, setAllRoom] = useState([]);
    const standardRoom = allRoom.filter(room => (room.roomtype === 'STANDARD'))

    useEffect(() => {
        axios
            .get(`/room/all-room`)
            .then(res => {
                setAllRoom(res.data)
            })
            .catch(err => {
                console.log(err);
            });
    }, []);
    return (
        <div>
            {standardRoom.map((room) =>
                <StandardBookingCard
                    key={room.id}
                    roomtype={room.roomtype}
                    picture={room.picture}
                    bed={room.bed}
                    roomSize={room.roomSize}
                    view={room.view}
                    price={room.price} />)}

            {/* {allRoom.map((room) => <SuperiorBookingCard price={room.price} />)}
            {allRoom.map((room) => <DeluxeBookingCard price={room.price} />)}
            {allRoom.map((room) => <JuniorSuiteBookingCard price={room.price} />)} */}


            <div className="bg-[#21395D] h-[1000px] ">
            </div>
        </div>
    )
}

// ไปทำ relative modal ที่  schema ตาม ER diagram ดูตัวอย่าง facebook
