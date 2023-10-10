import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import Layout from "../Layout/Layout";
import HomePage from "../pages/HomePage";
import FriendPage from "../pages/FriendPage";
import RedirectIfAuthenticated from "../feature/auth/RedirectIfAuthenticated";
import ProfilePage from "../pages/ProfilePage";
import Authenticated from "../feature/auth/Authenticated";

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <Authenticated>
                <Layout />
            </Authenticated>
        ),
        children: [
            { path: '', element: <HomePage /> },
            { path: 'room', element: <Room /> },
            { path: 'room/:roomDetail', element: <RoomDetail /> },
            { path: 'booking', element: <Booking /> },
            { path: 'booking/:reserve', element: <BookingReserve /> },
            { path: 'booking/:payment', element: <Payment /> }
        ]
    },
    {
        path: '/login',
        element: (
            <RedirectIfAuthenticated>
                <LoginPage />
            </RedirectIfAuthenticated>
        )
    }

]);

export default function Route() {
    return <RouterProvider router={router} />
}