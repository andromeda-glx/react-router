import { useParams } from "react-router-dom"
import useFetchData from "../../../hooks/useFetchData";
import Spinner from "../../../components/Spinner";

export default function Photos() {
    const { id } = useParams();
    const { data, isLoading, error } = useFetchData(`/api/host/vans/${id}`);

    const van = data?.vans;

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 overflow-y-auto p-1">
            {!error ? isLoading ? <Spinner /> : van &&
                <>
                    <div className="w-[100%]">
                        <img className="w-[100%] rounded-lg" src={van.imageUrl} alt={van.name} />
                    </div>
                    <div className="w-[100%]">
                        <img className="w-[100%] rounded-lg" src={van.imageUrl} alt={van.name} />
                    </div>
                    <div className="w-[100%]">
                        <img className="w-[100%] rounded-lg" src={van.imageUrl} alt={van.name} />
                    </div>
                </>
                : <p>Network Error</p>}
        </div>
    )
}
