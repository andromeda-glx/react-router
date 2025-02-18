import { useParams } from "react-router-dom"
import useFetchData from "../../../hooks/useFetchData";
import Spinner from "../../../components/Spinner";

export default function Details() {
    const { id } = useParams();
    const { data, isLoading, error } = useFetchData(`/api/host/vans/${id}`);

    const van = data?.vans;

    return (
        <div className="">
            {!error ? isLoading ? <Spinner /> : van &&
                <div className="flex flex-col gap-y-3">
                    <p>
                        <span className="font-bold">Name: </span> {van.name}
                    </p>
                    <p>
                        <span className="font-bold">Category: </span> {van.type}
                    </p>
                    <p>
                        <span className="font-bold">Description: </span> {van.description}
                    </p>
                    <p>
                        <span className="font-bold">Visibility: </span> Public
                    </p>
                </div>
            : <p>Network Error</p>}
        </div>
    )
}
