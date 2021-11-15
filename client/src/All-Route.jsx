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
            <Route path='/akari-city' element={<Home />}/>
            <Route path="/akari-city/about" element={<AboutPage />} />
            <Route path="/akari-city/location" element={<LocationPage />} />
            <Route path="/akari-city/ground" element={<GroundPage />} />
            <Route path="/akari-city/contact" element={<ContactPage />} />
            <Route path="/akari-city/price" element={<PricePage />} />
            <Route path="/akari-city/rental-price" element={<RentalPricePage />}/>
        </Routes>
    );
}

export default AllRoute;