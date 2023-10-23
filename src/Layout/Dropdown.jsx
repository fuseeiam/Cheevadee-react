import React from 'react'
import { Link } from "react-router-dom";
import Avatar from '../components/Avatar';
import { useEffect, useRef, useState } from 'react';
import { useAuth } from '../hooks/use-auth';
import { RightFromBracketIcon, PenIcon } from "../icons";


export default function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const dropDrownE1 = useRef(null)
    const { logout, authUser } = useAuth();

    useEffect(() => {
        const handdleClickOutside = e => {
            if (!dropDrownE1.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('click', handdleClickOutside);
        return () => {
            document.removeEventListener('click', handdleClickOutside);
        };
    }, [])

    return (
        <div className='relative' ref={dropDrownE1}>
            <div className='cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
                <Avatar src={authUser.profileImage} />
            </div>
            {isOpen && (
                <div className="w-96 absolute bg-white right-0 translate-y-1 border rounded-lg shadow-xl">
                    <Link to={`/auth/booking/mybooking/${authUser.id}`} onClick={() => setIsOpen(false)}>
                        <div className=" flex gap-4 p-2 items-center rounded-xl hover:bg-gray-100">
                            <Avatar className='h-14' src={authUser.profileImage} />
                            <div>
                                <div className="font-semibold">
                                    {authUser.firstName} {authUser.lastName}
                                </div>
                                <div className='text-sm text-gray-500'>My Booking</div>
                            </div>
                        </div>
                    </Link>

                    <hr className='m-2 border' />

                    <Link to=" " onClick={() => setIsOpen(false)}>
                        <div className='flex gap-4 p-2 items-center cursor-pointer hover:bg-gray-100 rounded-xl'>
                            <div>
                                <PenIcon />
                            </div>
                            <div className="font-semibold text-sm">Edit Profile</div>
                        </div>
                    </Link>

                    <div className='flex gap-4 p-2 items-center cursor-pointer hover:bg-gray-100 rounded-xl'
                        onClick={logout}
                    >
                        <div>
                            <RightFromBracketIcon />
                        </div>
                        <div className="font-semibold text-sm">Log out</div>
                    </div>
                </div>
            )}
        </div>
    )
}
