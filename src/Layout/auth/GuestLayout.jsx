import React from 'react'
import Header from '../Header'

export default function GuestLayout() {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}
