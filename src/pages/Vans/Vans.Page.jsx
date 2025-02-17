import FilterTab from "../../components/FilterTab";
import VanItem from "./VanItem";
import Spinner from "../../components/Spinner";
import useFetchData from "../../hooks/useFetchData";

export default function Vans() {
    const { data, error, isLoading } = useFetchData('/api/vans');

    return (
        <>
            <h1 className="text-3xl font-semibold">Explore our van options</h1>
            <nav className="my-5 w-full flex justify-between">
                <ul className="flex gap-5">
                    <FilterTab text={"Simple"} />
                    <FilterTab text={"Luxury"} />
                    <FilterTab text={"Rugged"} />
                </ul>
                <button className="underline cursor-pointer">
                    Clear filters
                </button>
            </nav>
            <div className="flex justify-center">
                {!error ? isLoading ? <Spinner /> :
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
                        {data?.vans && data.vans.map(({ id, imageUrl, name, price, type }) => (
                            <VanItem key={id} id={id} img={imageUrl} name={name} price={price} type={type} />
                        ))}
                    </ul>
                    : <p>Network Error</p>
                }
            </div>
        </>
    )
}
