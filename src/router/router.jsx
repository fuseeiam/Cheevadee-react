import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "../page/LoginPage";
import Layout from "../Layout/Layout";
import HomePage from "../page/HomePage";
import RoomPage from "../page/RoomPage";
import RoomTypePage from "../page/RoomTypePage";
import BookingPage from "../page/BookingPage";
import DiningPage from "../page/DiningPage";
import SpaPage from "../page/SpaPage";
import PaymentPage from "../page/PaymentPage";
import MyBooking from "../page/MyBooking";
import Authenticated from "../feature/auth/Authenticated"
import AuthLayout from "../Layout/auth/AuthLayout"
import Admin from "../page/admin/admin";

import RedirectIfAuthenticated from "../feature/auth/RedirectIfAuthenticated";

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <Layout />
        ),
        children: [
            { path: '/', element: <HomePage /> },
            { path: 'room', element: <RoomPage /> },
            { path: 'room/:roomType', element: <RoomTypePage /> },
            { path: 'booking', element: <BookingPage /> },
            { path: 'booking/reserve', element: <PaymentPage /> },
            { path: 'dining', element: <DiningPage /> },
            { path: 'spa', element: <SpaPage /> },
            {
                path: '/login', element: (
                    <RedirectIfAuthenticated>
                        <LoginPage />
                    </RedirectIfAuthenticated>
                )
            },
        ]
    },
    {
        path: '/auth',
        element: (
            <Authenticated>
                <AuthLayout />
            </Authenticated>
        ), children: [
            { path: '', element: <HomePage /> },
            { path: 'account/:bookingID', element: <MyBooking /> },
            { path: 'room', element: <RoomPage /> },
            { path: 'room/:roomType', element: <RoomTypePage /> },
            { path: 'spa', element: <SpaPage /> },
            { path: 'booking', element: <BookingPage /> },
            { path: 'booking/reserve', element: <PaymentPage /> },
            { path: 'booking/mybooking/:userId', element: <MyBooking /> }
        ]
    },
    {
        path: '/auth/admin',
        element: (
            <Authenticated>
                <AuthLayout />
            </Authenticated>
        ), children: [
            { path: '', element: <Admin /> }
        ]
    },

]);

export default function Route() {
    return <RouterProvider router={router} />
}