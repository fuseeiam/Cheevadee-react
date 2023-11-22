import React from 'react'
import CheckUserCard from '../../components/adminUI/CheckUserCard'
import { useEffect } from 'react';
import axios from '../../config/axios';
import { useState } from 'react';

export default function CheckUserPage() {
    const [allUser, setAllUser] = useState([]);

    useEffect(() => {
        axios
            .get(`/admin/checkUser`)
            .then(res => {
                setAllUser(res.data.allUser)
            })
            .catch(err => {
                console.log(err);
            });
    }, []);
    return (
        <div className="w-full h-full bg-slate-200 flex flex-col gap-5 flex-1 ">
            {allUser.map((el) => (
                <CheckUserCard key={el.id} userObj={el} />
            ))}
        </div>
    )
}
