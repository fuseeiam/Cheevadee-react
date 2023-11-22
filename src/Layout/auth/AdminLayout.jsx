import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminHeader from './AdminHeader'
import SideBar from '../../components/adminUI/SideBar'


export default function AdminLayout() {
    return (
        <div className='flex flex-col h-screen'>
            <AdminHeader />
            <div className="flex bg-slate-200 flex-1">
                <SideBar />
                <Outlet />
            </div>
        </div>
    )
}
