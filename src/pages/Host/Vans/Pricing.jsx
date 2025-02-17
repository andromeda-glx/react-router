import { useParams } from "react-router-dom"
import useFetchData from "../../../hooks/useFetchData";
import Spinner from "../../../components/Spinner";

export default function Pricing() {
    const { id } = useParams();
    const { data, error, isLoading } = useFetchData(`/api/vans/${id}`);

    return (
        <div>
            {
                !error ? isLoading ? <Spinner /> : data?.vans &&
                    <p className="text-xl">
                        <span className="text-2xl font-semibold">${data.vans.price}</span>/day
                    </p>
                    : <p>Network Error</p>
            }
        </div>
    )
}
