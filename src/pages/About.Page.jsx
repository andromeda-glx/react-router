import img from "../assets/images/image-54.png";
import Explore from "../components/Explore";

export default function About() {
    return (
        <>
            <div className="w-full">
                <img className="w-full" src={img} alt="van life" />
            </div>
            <article className="p-5">
                <h1 className="font-bold text-3xl mb-5">
                    Don’t squeeze in a sedan when you could relax in a van.
                </h1>
                <p className="mb-5">
                    Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                    (Hitch costs extra 😉)
                </p>
                <p>
                    Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
                </p>
                <Explore text="Your destination is waiting. Your van is ready." />
            </article>
        </>
    )
}
