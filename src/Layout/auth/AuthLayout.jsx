import React from 'react'
import { Outlet } from 'react-router-dom'
import UserHeader from '../auth/UserHeader'

export default function AuthLayout() {
    return (
        <div>
            <UserHeader />
            <Outlet />
        </div>
    )
}
