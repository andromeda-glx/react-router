import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home.Page"
import About from "./pages/About.Page"
import Vans from "./pages/Vans/Vans.Page"
import VanDetails from "./pages/Vans/VanDetails.Page"
import Layout from "./components/Layout"
import Dashboard from "./pages/Host/Dashboard.Page"
import HostNav from "./pages/Host/HostNav"
import Income from "./pages/Host/Income.Page"
import HostVans from "./pages/Host/HostVans.Page"
import Reviews from "./pages/Host/Reviews.Page"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/vans" element={<Vans />} />
                    <Route path="/vans/:id" element={<VanDetails />} />
                    <Route element={<HostNav />}>
                        <Route path="/host" element={<Dashboard />} />
                        <Route path="/host/income" element={<Income />} />
                        <Route path="/host/vans" element={<HostVans />} />
                        <Route path="/host/reviews" element={<Reviews />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
