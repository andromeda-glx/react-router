/* eslint-disable react/prop-types */
import { Link, NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className="flex items-center justify-between px-10 py-5 max-w-[1000px] mx-auto">
            <div className="">
                <Link to="/">
                    <h2 className="font-bold text-2xl">#VANLIFE</h2>
                </Link>
            </div>
            <nav className="main-nav flex gap-x-5">
                <NavLink
                    to="host"
                    // style={(isActive) => isActive ? activeStyle : undefined}
                    className={({isActive}) => isActive ? "underline font-bold" : undefined}
                >
                    Host
                </NavLink>
                <NavLink
                    to="about"
                    // style={(isActive) => isActive ? activeStyle : undefined}
                    className={({isActive}) => isActive ? "underline font-bold" : undefined}
                >
                    About
                </NavLink>
                <NavLink
                    to="vans"
                    // style={(isActive) => isActive ? activeStyle : undefined}
                    className={({isActive}) => isActive ? "underline font-bold" : undefined}
                >
                    Vans
                </NavLink>
            </nav>
        </header>
    )
}
