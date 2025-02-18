import useFetchData from "../../../hooks/useFetchData"
import VanItem from "./VanItem";
import { Link } from "react-router-dom";
import Spinner from "../../../components/Spinner";

export default function HostVans() {
    const { data, isLoading, error } = useFetchData('/api/host/vans');

    return (
        <div className="">
            <h1 className="text-3xl font-bold mb-6">Your listed vans</h1>
            <ul className="">
                <div
                    className="flex flex-col gap-y-4"
                >
                    {!error ? isLoading ? <Spinner /> :
                        data && data?.vans.map(({ id, imageUrl, name, price }) => {
                            return (
                                <Link key={id} to={id}>
                                    <VanItem imgURL={imageUrl} title={name} price={price} />
                                </Link>
                            )
                        })
                    : <p>Network Error</p>}
                </div>
            </ul>
        </div>
    )
}
