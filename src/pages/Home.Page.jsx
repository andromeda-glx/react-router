import Featured from "../components/Featured";
import Footer from "../components/Footer";
import Header from "../components/Header";

/* eslint-disable react/prop-types */
export default function Home() {
    return (
        <>
            <Header />
            <main className="max-w-[1000px] mx-auto px-10 h-dvh">
                <Featured
                    
                    title={"You got the travel plans, we got the travel vans."}
                    subTitle={"Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip."}
                />
            </main>
            <Footer />
        </>
    )
}
