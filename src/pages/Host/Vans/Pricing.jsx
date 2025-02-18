import { useParams } from "react-router-dom"
import useFetchData from "../../../hooks/useFetchData";
import Spinner from "../../../components/Spinner";

export default function Pricing() {
    const { id } = useParams();
    const { data, error, isLoading } = useFetchData(`/api/host/vans/${id}`);

    const van = data?.vans;

    return (
        <div>
            {
                !error ? isLoading ? <Spinner /> : van &&
                    <p className="text-xl">
                        <span className="text-2xl font-semibold">${van.price}</span>/day
                    </p>
                    : <p>Network Error</p>
            }
        </div>
    )
}
