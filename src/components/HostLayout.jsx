import { Link, Outlet } from "react-router-dom";

export default function HostLayout() {
    return (
        <>
            <nav className="flex gap-x-6 mb-10 font-semibold">
                <Link className="hover:underline" to={'/host'}>Dashboard</Link>
                <Link className="hover:underline" to={'/host/income'}>Income</Link>
                <Link className="hover:underline" to={'/host/vans'}>Vans</Link>
                <Link className="hover:underline" to={'/host/reviews'}>Reviews</Link>
            </nav>
            <Outlet />
        </>
    )
}
