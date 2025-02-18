import { useNavigate } from "react-router-dom"

// eslint-disable-next-line react/prop-types
export default function Button({ text }) {
    const navigate = useNavigate();

    return (
        <button className={`w-full bg-secondary text-white rounded-[5px] cursor-pointer h-13 font-bold`} onClick={() => navigate('vans')}>
            {text}
        </button>
    )
}
