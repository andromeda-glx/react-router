/* eslint-disable react/prop-types */
export default function FilterTab({ text }) {
    return (
        <li className="bg-filter-tab px-4 py-1 rounded-[5px]">
            <button className="cursor-pointer">
                {text}
            </button>
        </li>
    )
}
