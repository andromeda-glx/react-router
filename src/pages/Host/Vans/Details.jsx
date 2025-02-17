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
                <div className="flex flex-col gap-y-3">
                    <p>
                        <span className="font-bold">Name: </span> {data.vans.name}
                    </p>
                    <p>
                        <span className="font-bold">Category: </span> {data.vans.type}
                    </p>
                    <p>
                        <span className="font-bold">Description: </span> {data.vans.description}
                    </p>
                    <p>
                        <span className="font-bold">Visibility: </span> Public
                    </p>
                </div>
            : <p>Network Error</p>}
        </div>
    )
}
