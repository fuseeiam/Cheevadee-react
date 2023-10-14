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

// import RedirectIfAuthenticated from "../feature/auth/RedirectIfAuthenticated";


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
            { path: 'booking/:reserve', element: <PaymentPage /> },
            // { path: 'booking/:reserve/payment', element: <BookingPayment /> },
            // { path: 'booking/:reserve/payment/mybooking', element: <MyBooking /> }
            { path: 'dining', element: <DiningPage /> },
            { path: 'spa', element: <SpaPage /> },
        ]
    },
    {
        path: '/login',
        element: (
            <LoginPage />
        )
    }
]);

export default function Route() {
    return <RouterProvider router={router} />
}