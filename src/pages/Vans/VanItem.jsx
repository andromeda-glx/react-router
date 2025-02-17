import { Link } from "react-router-dom";
import VanType from "../../components/VanType";

/* eslint-disable react/prop-types */
export default function VanItem({ id, name, img, price, type }) {
    return (
        <Link to={`/vans/${id}`}>
            <li className="bg-white rounded-lg h-auto p-5">
                <div className="w-full h-[80%] mb-5">
                    <img className="rounded-lg w-full h-full object-cover object-center" src={img} alt="" />
                </div>
                <div className="">
                    <div className="flex justify-between mb-2">
                        <h2 className="text-2xl">{name}</h2>
                        <p>${price}<span>/day</span></p>
                    </div>
                    <VanType type={type} />
                </div>
            </li>
        </Link>
    )
}
