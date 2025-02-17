import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home.Page"
import About from "./pages/About.Page"
import Vans from "./pages/Vans/Vans.Page"
import VanDetails from "./pages/Vans/VanDetails.Page"
import Layout from "./components/Layout"
import Dashboard from "./pages/Host/Dashboard.Page"
import HostLayout from "./components/HostLayout"
import Income from "./pages/Host/Income.Page"
import HostVans from "./pages/Host/Vans/HostVans.Page"
import Reviews from "./pages/Host/Reviews.Page"
import NotFound from "./pages/NotFound"
import VanDetailsPage from "./pages/Host/Vans/VanDetailsPage"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="vans" element={<Vans />} />
                    <Route path="vans/:id" element={<VanDetails />} />
                    <Route path="*" element={<NotFound />} />

                    <Route path="host" element={<HostLayout />}>
                        <Route index element={<Dashboard />} />
                        <Route path="income" element={<Income />} />
                        <Route path="vans" element={<HostVans />} />
                        <Route path="vans/:id" element={<VanDetailsPage />} />
                        <Route path="reviews" element={<Reviews />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
