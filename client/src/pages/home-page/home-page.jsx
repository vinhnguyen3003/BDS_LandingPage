import React, { useEffect } from 'react';
import Banner from '../../components/banner/banner';
import Ground from '../../components/ground/ground';
import About from '../../components/about/about';
import Facility from '../../components/facility/facility';
import Location from '../../components/location/location';
import scrollTop from '../../utils/scrollTop';
import bannerInfoList from '../../assets/json-data/price-list.json';


function Home() {
    useEffect(()=>{
        scrollTop();
    },[])
    return (
        <div className="home">
            <title>Trang chủ | Akari</title>
            <Banner 
                seeLinkStatus={true}
                bannerType={0}
                bannerTitle="Cập nhật giá bán"
                bannerInfoList={bannerInfoList}
            />
            <About />
            <Location />
            <Facility />
            <Ground />
        </div>
    );
}

export default Home;