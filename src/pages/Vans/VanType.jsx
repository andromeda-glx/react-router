/* eslint-disable react/prop-types */
export default function VanType({ type }) {
    
    function typeColor(type) {
        switch (type) {
            case "simple":
                return "bg-type-simple";
        
            case "rugged":
                return "bg-type-rugged";

            case "luxury":
                return "bg-type-luxury";

            default:
                return "bg-white";
        }
    }

    return (
        <div className={`${typeColor(type)} text-white inline-block px-2 py-1 rounded-md`}>
            {type && type.charAt(0).toUpperCase() + type.slice(1)}
        </div>
    )
}
