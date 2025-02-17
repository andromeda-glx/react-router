import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <ul className="flex gap-x-10">
                <li>
                    <NavLink to={''} className={({isActive}) => isActive ? "font-bold underline" : undefined}>
                        Details
                    </NavLink>
                </li>
                <li>
                    <NavLink to={''}>
                        Pricing
                    </NavLink>
                </li>
                <li>
                    <NavLink to={''}>
                        Photos
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
