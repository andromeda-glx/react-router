/* eslint-disable react/prop-types */
export default function FilterTab({ text, hover }) {
    return (
        <li className={`bg-filter-tab px-4 py-1 rounded-[5px] ${hover} hover:text-white transition-colors`}>
            <button className="cursor-pointer">
                {text}
            </button>
        </li>
    )
}
