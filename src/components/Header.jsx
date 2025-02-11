/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="flex items-center justify-between px-10 py-5 max-w-[1000px] mx-auto">
            <div className="">
                <Link to="/">
                    <h2 className="font-bold text-2xl">#VANLIFE</h2>
                </Link>
            </div>
            <nav className="flex gap-x-5">
                <Link to="/host" className="hover:underline">Host</Link>
                <Link to="/about" className="hover:underline" >About</Link>
                <Link to="/vans" className="hover:underline">Vans</Link>
            </nav>
        </header>
    )
}
