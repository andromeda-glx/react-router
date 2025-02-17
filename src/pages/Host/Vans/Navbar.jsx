import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <ul className="flex gap-x-6">
                <li>
                    <NavLink end to={''} className={({isActive}) => isActive ? "font-bold underline" : undefined}>
                        Details
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'pricing'} className={({isActive}) => isActive ? "font-bold underline" : undefined}>
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
