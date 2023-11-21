import React from 'react';
import { useAuth } from '../../hooks/use-auth';
import SideBar from '../../components/adminUI/SideBar';

export default function AdminPage() {
    const { user } = useAuth();
    console.log(user?.firstName);
    return (
        <div>
            <div className="absolute top-0 left-[20vw] w-full h-full bg-slate-200 flex flex-col gap-5 items-center justify-evenly -z-20">
            </div>
        </div>
    );
}




