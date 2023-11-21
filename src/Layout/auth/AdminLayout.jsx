import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminHeader from './AdminHeader'
import SideBar from '../../components/adminUI/SideBar'


export default function AdminLayout() {
    return (
        <div>
            <AdminHeader />
            <div className="flex w-full " style={{ height: "calc(vh - 60px)" }}>
                <SideBar />
                <Outlet />
            </div>
        </div>
    )
}
