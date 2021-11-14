import React, { useEffect } from 'react';
import Banner from '../../components/banner/banner';
import Ground from '../../components/ground/ground';
import About from '../../components/about/about';
import Facility from '../../components/facility/facility';
import Location from '../../components/location/location';
import scrollTop from '../../utils/scrollTop';

function Home() {
    useEffect(()=>{
        scrollTop();
    },[])
    return (
        <div className="home">
            <Banner />
            <About />
            <Location />
            <Facility />
            <Ground />
        </div>
    );
}

export default Home;