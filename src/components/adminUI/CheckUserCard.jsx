import React from 'react'
import Avatar from "../Avatar";
import { useAuth } from "../../hooks/use-auth";

export default function CheckUserCard() {
    const { authUser } = useAuth();

    return (
        <div className="p-5">
            <div className="bg-white border border-gray border-3 p-3 flex justify-between rounded-xl">
                <div className="flex flex-1">
                    <div className="flex gap-10">
                        <div className=" flex gap-4 items-center rounded-xl hover:bg-gray-100">
                            <Avatar className='h-52' src={authUser?.profileImage} />
                        </div>
                        <div className="flex flex-col gap-3 text-xl font-bold">
                            <div>Name :</div>
                            <div>E-mail :</div>
                            <div>Mobile :</div>
                            <div>Role :</div>
                        </div>
                        <div className="flex flex-col gap-3 text-xl font-li">
                            <div>Firstname Lastname</div>
                            <div>a@email.com</div>
                            <div>098-999-8888</div>
                            <div>user</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}