import React from 'react'
import { createContext, useEffect } from 'react';
import { useState } from 'react';
import * as reserveService from '../api/reserveApi';
import { useContext } from 'react';

const ReserveRoomContext = createContext();

function ReserveRoomContextProvider({ children }) {
    const [room, setRoom] = useState([]);
    const [allPost, setAllPost] = useState([]);
    const [price, setPrice] = useState(0)
    const getRoomData = async (roomId) => {
        try {
            const res = await reserveService.getRoomData(roomId);
            setRoom(res.data)
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <ReserveRoomContext.Provider
            value={{
                getRoomData,
                room, allPost, setAllPost, price, setPrice

            }}
        >
            {children}
        </ReserveRoomContext.Provider>
    );
}

export const useReserve = () => {
    return useContext(ReserveRoomContext);
};

export default ReserveRoomContextProvider;
