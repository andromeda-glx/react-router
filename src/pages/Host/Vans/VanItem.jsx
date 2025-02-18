/* eslint-disable react/prop-types */
export default function VanItem({imgURL, title, price}) {
    return (
        <li className="flex items-center gap-x-5 w-[100%] bg-white p-4 rounded-lg cursor-pointer">
            <div className="w-[80px]">
                <img src={imgURL} alt={title} />
            </div>
            <div className="">
                <h2 className="font-bold">{title}</h2>
                <p>${price}/day</p>
            </div>
        </li>
    )
}
