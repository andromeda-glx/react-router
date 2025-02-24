import FilterTab from "../../components/FilterTab";
import VanItem from "./VanItem";
import Spinner from "../../components/Spinner";
import useFetchData from "../../hooks/useFetchData";
import { Link, useSearchParams } from "react-router-dom";

export default function Vans() {
    const { data, error, isLoading } = useFetchData('/api/vans');

    const [searchParams, setSearchParams] = useSearchParams();
    const typeFilter = searchParams.get("type");

    let vans = typeFilter
        ? data?.vans.filter(van => van.type === typeFilter)
        : data?.vans;

    return (
        <>
            <h1 className="text-3xl font-semibold">Explore our van options</h1>
            <nav className="my-5 w-full flex justify-between">
                <ul className="flex gap-5">
                    <FilterTab
                        text={"Simple"}
                        hover={"hover:bg-[#E17654]"}
                        click={() => setSearchParams({type: "simple"})}
                    />
                    <FilterTab
                        text={"Luxury"}
                        hover={"hover:bg-[#161616]"}
                        click={() => setSearchParams({type: "luxury"})}
                    />
                    <FilterTab
                        text={"Rugged"}
                        hover={"hover:bg-[#115E59]"}
                        click={() => setSearchParams({type: "rugged"})}
                    />
                </ul>
                <button className="underline cursor-pointer" onClick={() => setSearchParams({})}>
                    Clear filters
                </button>
            </nav>
            <div className="flex justify-center">
                {!error ? isLoading ? <Spinner /> :
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
                        {vans &&
                            vans.map(({ id, imageUrl, name, price, type }) => {
                                return (
                                    <VanItem
                                        key={id}
                                        id={id}
                                        img={imageUrl}
                                        name={name}
                                        price={price}
                                        type={type}
                                    />
                                )
                            })}
                    </ul>
                    : <p>Network Error</p>
                }
            </div>
        </>
    )
}
