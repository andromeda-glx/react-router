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
import Details from "./pages/Host/Vans/Details"
import Pricing from "./pages/Host/Vans/Pricing"
import Photos from "./pages/Host/Vans/Photos"

function App() {
    return (
        <BrowserRouter basename="/react-router/" >
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
                        <Route path="vans/:id" element={<VanDetailsPage />}>
                            <Route index element={<Details />} />
                            <Route path="pricing" element={<Pricing />} />
                            <Route path="photos" element={<Photos />} />
                        </Route>
                        <Route path="reviews" element={<Reviews />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
