import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import FilterTab from "../components/FilterTab";
import VanItem from "../components/VanItem";
import Spinner from "../components/Spinner";

export default function Vans() {
    const [vans, setVans] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch('/api/vans')
            .then(res => res.json())
            .then(data => setVans([...data.vans]))
            .catch(e => console.log(e))
            .finally(() => setIsLoading(false));
    }, []);

    return (
        <>
            <Header currentPage="vans" />
            <main className="max-w-[1000px] mx-auto px-10 h-auto my-10">
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
                    {isLoading ? <Spinner /> :
                        <ul className="grid grid-cols-2 gap-5">
                            {vans.map(({ id, imageUrl, name, price, type }) => (
                                <VanItem key={id} id={id} img={imageUrl} name={name} price={price} type={type} />
                            ))}
                        </ul>
                    }
                </div>
            </main>
            <Footer />
        </>
    )
}
