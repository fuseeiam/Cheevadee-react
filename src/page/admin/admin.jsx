import React from 'react';
import { useAuth } from '../../hooks/use-auth';
import SideBar from '../../components/adminUI/SideBar';

export default function admin() {
    const { user } = useAuth();
    console.log(user.firstName);
    return (
        <div>
            <SideBar />
            <div className="absolute top-0 left-[20vw] w-[80vw] h-[100vh] bg-slate-500 flex flex-col gap-5 items-center justify-evenly "></div>
        </div>
    );
}




