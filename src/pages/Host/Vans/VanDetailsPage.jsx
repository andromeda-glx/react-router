import { Outlet, useNavigate, useParams } from "react-router-dom"
import useFetchData from "../../../hooks/useFetchData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Spinner from "../../../components/Spinner";
import VanType from "../../../components/VanType";
import Navbar from "./Navbar";

export default function VanDetailsPage() {
    const { id } = useParams();
    const { data, error, isLoading } = useFetchData(`/api/host/vans/${id}`);
    console.log(data);

    const van = data?.vans;

    const navigate = useNavigate();

    return (
        <>
            {/* relative property here is used to navigate back to the previous page (parent) not according to the route structure we made in the App.jsx but to the URL structure. relative property is also available to <Link relative="path" ></Link> */}
            <span className="flex items-center gap-x-3 mb-5 hover:underline cursor-pointer"
                onClick={() => navigate('..', { relative: "path" })}
            >
                <FontAwesomeIcon icon={faArrowLeft} />
                <p>Back to all vans</p>
            </span>
            <div className="bg-white p-10 rounded-lg flex flex-col items-center">
                {!error ? isLoading ? <Spinner />
                    : van &&
                    <div className="flex flex-col gap-y-7">
                        <div className="flex items-center gap-x-5">
                            <div className="w-[40%]">
                                <img src={van.imageUrl} alt={van.name} />
                            </div>
                            <div className="flex flex-col gap-y-4 items-start">
                                <VanType type={van.type} />
                                <h2 className="text-3xl font-semibold">{van.name}</h2>
                                <p className="text-xl font-semibold">${van.price}/day</p>
                            </div>
                        </div>
                        <div className="">
                            <Navbar />
                        </div>
                        <div className="">
                            <Outlet context={{ data }} />
                        </div>
                    </div>
                    :
                    <p>Network Error</p>
                }
            </div>
        </>
    )
}
