/* eslint-disable react/prop-types */
export default function FilterTab({ text, hover, click }) {
    return (
        <li className={`bg-filter-tab px-4 py-1 rounded-[5px] ${hover} hover:text-white transition-colors cursor-pointer`} onClick={click}>
            <button className="cursor-pointer">
                {text}
            </button>
        </li>
    )
}
