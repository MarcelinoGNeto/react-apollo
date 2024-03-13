import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import LocationsPage from "./pages/Locations";
import AboutPage from "./pages/About";

function MainRoutes() {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/locations" element={<LocationsPage />} />
            <Route path="/about" element={<AboutPage />} />
        </Routes>
    );
}

export default MainRoutes;