import { useEffect, useState } from "react";
import VanItem from "./VanItem";
import { Link } from "react-router-dom";

export default function HostVans() {
    const [vans, setVans] = useState([]);
    const ownedVansIDs = ["1", "2", "6"];

    async function fetchData() {
        ownedVansIDs.forEach(async (id) => {
            const res = await fetch(`/api/vans/${id}`);
            const data = await res.json();
            setVans(prev => [...prev, data.vans]);
        })
    }

    useEffect(() => {
        fetchData();

        return setVans([]);
    }, []);

    return (
        <div className="">
            <h1 className="text-3xl font-bold mb-6">Your listed vans</h1>
            <ul className="">
                <div
                    className="flex flex-col gap-y-4"
                >
                    {
                        vans.map(({ id, imageUrl, name, price }) => {
                            return (
                                <Link key={id} to={id}>
                                    <VanItem imgURL={imageUrl} title={name} price={price} />
                                </Link>
                            )
                        })
                    }
                </div>
            </ul>
        </div>
    )
}
