import { useOutletContext } from "react-router-dom"

export default function Photos() {
    const { data } = useOutletContext();

    const van = data?.vans;

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 overflow-y-auto p-1">
            {van &&
                <>
                    <div className="w-[100%]">
                        <img className="w-[100%] rounded-lg" src={van.imageUrl} alt={van.name} />
                    </div>
                    <div className="w-[100%]">
                        <img className="w-[100%] rounded-lg" src={van.imageUrl} alt={van.name} />
                    </div>
                    <div className="w-[100%]">
                        <img className="w-[100%] rounded-lg" src={van.imageUrl} alt={van.name} />
                    </div>
                </>
                }
        </div>
    )
}
