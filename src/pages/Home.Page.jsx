import Featured from "../components/Featured";

export default function Home() {
    return (
        <main className="max-w-[1000px] mx-auto px-10 h-dvh">
            <Featured
                title={"You got the travel plans, we got the travel vans."}
                subTitle={"Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip."}
            />
        </main>
    )
}
