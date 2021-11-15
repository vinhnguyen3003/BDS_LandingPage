import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutPage from './pages/about-page/about-page';
import ContactPage from './pages/contact-page/contact-page';
import GroundPage from './pages/ground-page/ground-page';
import Home from './pages/home-page/home-page';
import LocationPage from './pages/location-page/location-page';
import PricePage from './pages/price-page/price-page';
import RentalPricePage from './pages/rental-price-page/rental-price-page';

function AllRoute() {
    return (
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path="/about" element={<AboutPage />} />
            <Route path="/location" element={<LocationPage />} />
            <Route path="/ground" element={<GroundPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/price" element={<PricePage />} />
            <Route path="/rental-price" element={<RentalPricePage />}/>
        </Routes>
    );
}

export default AllRoute;