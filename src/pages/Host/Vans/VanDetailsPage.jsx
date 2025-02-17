import { Outlet, useNavigate, useParams } from "react-router-dom"
import useFetchData from "../../../hooks/useFetchData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Spinner from "../../../components/Spinner";
import VanType from "../../../components/VanType";
import Navbar from "./Navbar";

export default function VanDetailsPage() {
    const { id } = useParams();
    const { data, error, isLoading } = useFetchData(`/api/vans/${id}`);
    const navigate = useNavigate();

    return (
        <>
            <span className="flex items-center gap-x-3 mb-5 hover:underline cursor-pointer" onClick={() => navigate('../vans')} >
                <FontAwesomeIcon icon={faArrowLeft} />
                <p>Back to all vans</p>
            </span>
            <div className="bg-white p-10 rounded-lg flex flex-col items-center">
                {!error ? isLoading ? <Spinner />
                    : data?.vans &&
                    <div className="flex flex-col gap-y-7">
                        <div className="flex items-center gap-x-5">
                            <div className="w-[40%]">
                                <img src={data.vans.imageUrl} alt={data.vans.name} />
                            </div>
                            <div className="flex flex-col gap-y-4 items-start">
                                <VanType type={data.vans.type} />
                                <h2 className="text-3xl font-semibold">{data.vans.name}</h2>
                                <p className="text-xl font-semibold">${data.vans.price}/day</p>
                            </div>
                        </div>
                        <div className="">
                            <Navbar />
                        </div>
                        <div className="">
                            <Outlet />
                        </div>
                    </div>
                    :
                    <p>Network Error</p>
                }
            </div>
        </>
    )
}
