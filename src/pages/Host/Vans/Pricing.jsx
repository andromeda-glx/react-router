import { useOutletContext } from "react-router-dom"

export default function Pricing() {
    const { data } = useOutletContext();
    
    const van = data?.vans;

    return (
        <div>
            {
                van &&
                    <p className="text-xl">
                        <span className="text-2xl font-semibold">${van.price}</span>/day
                    </p>
                    
            }
        </div>
    )
}
