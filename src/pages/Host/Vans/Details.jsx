import { useParams } from "react-router-dom"
import useFetchData from "../../../hooks/useFetchData";
import Spinner from "../../../components/Spinner";

export default function Details() {
    const { id } = useParams();
    const { data, isLoading, error } = useFetchData(`/api/vans/${id}`);

    console.log(data?.vans);
    

    return (
        <div className="">
            {!error ? isLoading ? <Spinner /> : data?.vans &&
                <div className="flex flex-col gap-y-2">
                    <p>
                        <span className="font-semibold">Name: </span> {data.vans.name}
                    </p>
                    <p>
                        <span className="font-semibold">Category: </span> {data.vans.type}
                    </p>
                    <p>
                        <span className="font-semibold">Description: </span> {data.vans.description}
                    </p>
                    <p>
                        <span className="font-semibold">Visibility: </span> {data.vans.visibility}
                    </p>
                </div>
            : <p>Network Error</p>}
        </div>
    )
}
