import { useParams } from "react-router-dom"
import useFetchData from "../../../hooks/useFetchData";
import Spinner from "../../../components/Spinner";

export default function Photos() {
    const { id } = useParams();
    const { data, isLoading, error } = useFetchData(`/api/vans/${id}`);

    return (
        <div className="grid grid-cols-3 gap-5">
            {!error ? isLoading ? <Spinner /> : data?.vans &&
                <>
                    <div className="w-[100%]">
                        <img className="w-[100%]" src={data.vans.imageUrl} alt={data.vans.name} />
                    </div>
                    <div className="w-[100%]">
                        <img className="w-[100%]" src={data.vans.imageUrl} alt={data.vans.name} />
                    </div>
                    <div className="w-[100%]">
                        <img className="w-[100%]" src={data.vans.imageUrl} alt={data.vans.name} />
                    </div>
                </>
                : <p>Network Error</p>}
        </div>
    )
}
