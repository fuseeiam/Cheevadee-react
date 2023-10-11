import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "../page/LoginPage";
import Layout from "../Layout/Layout";
import HomePage from "../page/HomePage";

// import RedirectIfAuthenticated from "../feature/auth/RedirectIfAuthenticated";


const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <Layout />
        ),
        children: [
            { path: '/', element: <HomePage /> },
            // { path: 'room', element: <Room /> },
            // { path: 'room/:roomType', element: <RoomType /> },
            // { path: 'booking', element: <Booking /> },
            // { path: 'booking/:reserve', element: <BookingReserve /> },
            // { path: 'booking/:reserve/payment', element: <BookingPayment /> },
            // { path: 'booking/:reserve/payment/mybooking', element: <MyBooking /> }
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