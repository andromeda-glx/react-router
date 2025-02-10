import VanType from "./VanType";

/* eslint-disable react/prop-types */
export default function VanItem({ name, img, price, type }) {
    return (
        <li className="bg-white rounded-lg">
            <div className="p-5 w-full h-[80%]">
                <img className="rounded-lg w-full h-full object-cover object-center" src={img} alt="" />
            </div>
            <div className="px-5">
                <div className="flex justify-between mb-2">
                    <h2 className="text-2xl">{name}</h2>
                    <p>${price}</p>
                </div>
                <VanType type={type} />
            </div>
        </li>
    )
}
