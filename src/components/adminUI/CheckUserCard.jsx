import React from 'react'
import Avatar from "../Avatar";
import { useAuth } from "../../hooks/use-auth";

export default function CheckUserCard({ userObj }) {
    const { authUser } = useAuth();
    console.log(userObj);
    return (
        <div className="p-5">
            <div className="bg-white border border-gray border-3 p-3 flex justify-between rounded-xl">
                <div className="flex flex-1">
                    <div className="flex gap-10">
                        <div className=" flex gap-4 items-center rounded-xl hover:bg-gray-100">
                            <Avatar className='h-52' src={userObj.profileImage} />
                        </div>
                        <div className="flex flex-col gap-3 text-xl font-bold">
                            <div>Name :</div>
                            <div>Role :</div>
                            <div>E-mail :</div>
                            <div>Mobile :</div>
                        </div>
                        <div className="flex flex-col gap-3 text-xl font-li">
                            <div>{userObj.firstName} {userObj.lastName}</div>
                            <div>{userObj.role}</div>
                            <div>{userObj.email}</div>
                            <div>{userObj.mobile}</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}