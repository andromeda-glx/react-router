import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function VanDetailsPage() {
    const [van, setVan] = useState();
    const { id } = useParams();

    useEffect(() => {
        fetch(`/api/vans/${id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
            .catch(e => console.log(e))
            .finally();
    }, []);

    console.log(van);
    

    return (
        van ?
            <div>
                <div className="">
                    <div className="">
                        <img src={van.imageUrl} alt={van.name} />
                    </div>
                    <div className="">
                        <h1>{van.name}</h1>
                    </div>
                </div>

            </div>
            : undefined
    )
}
