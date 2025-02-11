import { Link, Outlet } from "react-router-dom";

export default function HostNav() {
    return (
        <>
            <nav className="flex gap-x-6 mb-10">
                <Link className="hover:underline" to={'/host'}>Dashboard</Link>
                <Link className="hover:underline" to={'/host/income'}>Income</Link>
                <Link className="hover:underline" to={'/host/vans'}>Vans</Link>
                <Link className="hover:underline" to={'/host/reviews'}>Reviews</Link>
            </nav>
            <Outlet />
        </>
    )
}
