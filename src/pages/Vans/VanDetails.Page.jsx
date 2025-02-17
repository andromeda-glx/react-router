import { useParams } from "react-router-dom";
import Spinner from "../../components/Spinner";
import VanType from "./VanType";
import Button from "../../components/Button";
import useFetchData from "../../hooks/useFetchData";

export default function VanDetails() {
    const params = useParams();
    const id = params.id;
    const {data, isLoading, error} = useFetchData(`/api/vans/${id}`);

    return (
        <div className="w-full flex justify-center">
            {!error ? isLoading ? <Spinner /> :
                data && <div className="w-full mx-auto">
                    <div className="w-full flex justify-center mb-10">
                        <img className="h-full rounded-lg" src={data.vans.imageUrl} alt={data.vans.name} />
                    </div>
                    <VanType type={data.vans.type} />
                    <h1 className="text-4xl font-semibold mt-5">{data.vans.name}</h1>
                    <h2 className="text-2xl font-bold inline-block mt-5">${data.vans.price}</h2><span>/day</span>
                    <p className="my-5">{data.vans.description}</p>
                    <Button text={"Rent this van"} />
                </div>
                : <p>Network Error</p>
            }
        </div>
    )
}
