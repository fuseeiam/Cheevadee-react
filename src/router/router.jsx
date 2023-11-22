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

import RedirectIfAuthenticated from "../feature/auth/RedirectIfAuthenticated";
import AdminPage from "../page/admin/AdminPage";

import AdminLayout from "../Layout/auth/AdminLayout";
import RedirectIsAdmin from "./redirect/RedirectIsAdmin";



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
            { path: 'booking/reserve/:roomId', element: <PaymentPage /> },
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
            { path: 'dining', element: <DiningPage /> },
            { path: 'dining/booking', element: <BookingPage /> },
            { path: 'dining/booking/reserve/:roomId', element: <PaymentPage /> },
            { path: 'spa', element: <SpaPage /> },
            { path: 'spa/booking', element: <BookingPage /> },
            { path: 'spa/booking/reserve/:roomId', element: <PaymentPage /> },
            { path: 'booking', element: <BookingPage /> },
            { path: 'booking/reserve/:roomId', element: <PaymentPage /> },
            { path: 'booking/mybooking/:userId', element: <MyBooking /> }
        ]
    },
    {
        path: "/auth/admin",
        element: (

            <RedirectIsAdmin>
                <AdminLayout />
            </RedirectIsAdmin>


        ),
        children: [
            { path: "", element: <AdminPage /> },
            // { path: "manageuser", element: <CheckUserPage /> },
            // { path: "managebooking", element: <CheckBookingPage /> },
            // { path: "managepayment", element: <CheckPaymentPage /> },
            // { path: "manageroom", element: <CreateRoomPage /> }
        ],
    }
]);


export default function Route() {
    return <RouterProvider router={router} />
}


