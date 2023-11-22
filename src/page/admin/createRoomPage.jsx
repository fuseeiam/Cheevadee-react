import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from '../../config/axios';
import CreateRoomCard from '../../components/adminUI/CreateRoomCard';
import CreateRoomModal from './CreateRoomModal';


export default function CreateRoomPage() {

    const [allRoom, setAllRoom] = useState([]);

    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        getRoom();
    }, []);

    console.log('allRoom', allRoom);
    const getRoom = async () => {
        const res = await axios
            .get("/admin/getallroom")
            .then((res) => {
                setAllRoom(res.data.allRoom);
            })
            .catch((error) => console.log(error));
        return res;
    };

    return (
        <div className="w-full h-full bg-slate-200 flex flex-col gap-5 flex-1">

            <div className='px-40 pt-6 flex justify-end'>
                <div className='flex text-[#C18638] hover:text-[#BD7416] text-xl font-li'>
                    <button
                        onClick={() => setIsOpen(true)}
                        className="bg-[#C18638] hover:bg-[#BD7416] text-white text-xl py-4 px-10 rounded-md text-center font-li ">
                        CREATE ROOM
                    </button>
                </div>
                <CreateRoomModal roomObj={allRoom} open={isOpen} setIsOpen={setIsOpen} />
            </div>

            {allRoom.map((el) => (
                <CreateRoomCard key={el.id} roomObj={el} />
            ))}
        </div>
    )
}
