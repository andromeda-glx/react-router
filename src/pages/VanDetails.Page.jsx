import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import VanType from "../components/VanType";
import Button from "../components/Button";

export default function VanDetails() {
    const [van, setVan] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const params = useParams();
    const id = params.id;

    useEffect(() => {
        setIsLoading(true);
        fetch(`/api/vans/${id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
            .catch(e => console.log(e))
            .finally(() => setIsLoading(false));
    }, []);

    return (
        <>
            <Header />
            <main className="max-w-[1000px] mx-auto px-10 h-auto my-10">
                <div className="w-full flex justify-center">
                    {isLoading ? <Spinner /> :
                        <div className="w-full mx-auto">
                            <div className="w-full flex justify-center mb-10">
                                <img className="h-full rounded-lg" src={van.imageUrl} alt={van.name} />
                            </div>
                            <VanType type={van.type} />
                            <h1 className="text-4xl font-semibold mt-5">{van.name}</h1>
                            <h2 className="text-2xl font-bold inline-block mt-5">${van.price}</h2><span>/day</span>
                            <p className="my-5">{van.description}</p>
                            <Button text={"Rent this van"} />
                        </div>
                    }
                </div>
            </main>
            <Footer />
        </>
    )
}
