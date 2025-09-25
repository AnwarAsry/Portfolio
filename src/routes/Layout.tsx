import { Navbar } from "@components/Navbar";
import { Outlet } from "react-router";

export const Layout = () => {
    return <>
        <header className="w-full py-6 flex justify-center">
            <Navbar />
        </header>
        <main className="mt-5">
            <Outlet />
        </main>
    </>;
}