import { Outlet } from "react-router-dom";

export default function HostNav() {
    return (
        <main className="max-w-[1000px] mx-auto px-10 h-auto my-10">
            <nav className="flex gap-x-6 mb-10">
                <div className="">Dashboard</div>
                <div className="">Income</div>
                <div className="">Vans</div>
                <div className="">Reviews</div>
            </nav>
            <Outlet />
        </main>
    )
}
