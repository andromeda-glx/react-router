import { NavLink, Outlet } from "react-router-dom";

export default function HostLayout() {
    const style = {
        textDecoration: "underline",
        fontWeight: 700
    }

    return (
        <>
            <nav className="host-nav flex gap-x-6 mb-10">
                <NavLink
                    // className={(isActive) => isActive ? "underline font-semibold" : undefined}
                    style={({ isActive }) => isActive ? style : undefined}
                    end
                    to='/host'
                >
                    Dashboard
                </NavLink>
                <NavLink
                    // className={(isActive) => isActive ? "underline font-semibold" : undefined}
                    style={({ isActive }) => isActive ? style : undefined}
                    to='income'
                >
                    Income
                </NavLink>
                <NavLink
                    // className={(isActive) => isActive ? "underline font-semibold" : undefined}
                    style={({isActive}) => isActive ? style : undefined}
                    to='vans'
                >
                    Vans
                </NavLink>
                <NavLink
                    // className={(isActive) => isActive ? "underline font-semibold" : undefined}
                    style={({isActive}) => isActive ? style : undefined}
                    to='reviews'
                >
                    Reviews
                </NavLink>
            </nav>
            <Outlet />
        </>
    )
}
