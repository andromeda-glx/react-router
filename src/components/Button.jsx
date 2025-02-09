// eslint-disable-next-line react/prop-types
export default function Button({text}) {
  return (
        <button className={`w-full bg-secondary text-white rounded-[5px] cursor-pointer h-13 font-bold`}>
            {text}
        </button>
  )
}
