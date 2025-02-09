import Button from "./Button";

/* eslint-disable react/prop-types */
export default function Featured({title, subTitle}) {
    return (
        <div className={`w-full bg-[url('./assets/images/image-53.png')] bg-no-repeat bg-cover bg-center px-10 py-20 flex flex-col items-center justify-center gap-y-5`}>
            <h1 className="text-4xl font-bold text-white">{title}</h1>
            <p className="text-white text-xl mb-10">{subTitle}</p>
            <Button text={"Find your van"} />
        </div>
    )
}
