import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Explore({ text }) {
    return (
        <div className="mt-10 bg-tertiary rounded-[5px] p-7 max-w-[600px] mx-auto">
            <h2 className="text-2xl font-bold">{text}</h2>
            <Link to='/vans'>
                <button className="mt-5 cursor-pointer bg-black text-white px-6 py-3 rounded-[10px] font-semibold">
                    Explore our vans
                </button>
            </Link>
        </div>
    )
}
