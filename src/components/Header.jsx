/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function Header({currentPage = "home"}) {
    return (
        <header className="flex items-center justify-between px-10 py-5 max-w-[1000px] mx-auto">
            <div className="">
                <Link to="/react-router">
                    <h2 className="font-bold text-2xl">#VANLIFE</h2>
                </Link>
            </div>
            <nav className="flex gap-x-2 font-semibold">
                <Link to="/about" className={currentPage === 'about' && "underline"}>About</Link>
                <Link to="/vans" className={currentPage === 'vans' && "underline"}>Vans</Link>
            </nav>
        </header>
    )
}
