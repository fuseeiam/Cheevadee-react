import { Outlet } from "react-router-dom";
import Header from "./Header";
import HomePage from "../page/HomePage";

export default function Layout() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}