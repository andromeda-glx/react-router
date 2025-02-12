import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <>
            <Header />
            <main className="max-w-[1000px] mx-auto px-10 min-h-dvh my-10">
                {<Outlet />}
            </main>
            <Footer />
        </>
    )
}
