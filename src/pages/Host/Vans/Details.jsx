import { useOutletContext } from "react-router-dom"

export default function Details() {
    const { data } = useOutletContext();

    const van = data?.vans;

    return (
        <div className="">
            { van &&
                <div className="flex flex-col gap-y-3">
                    <p>
                        <span className="font-bold">Name: </span> {van.name}
                    </p>
                    <p>
                        <span className="font-bold">Category: </span> {van.type}
                    </p>
                    <p>
                        <span className="font-bold">Description: </span> {van.description}
                    </p>
                    <p>
                        <span className="font-bold">Visibility: </span> Public
                    </p>
                </div>
                }
        </div>
    )
}
