import React, { useEffect } from 'react';
import Banner from '../../components/banner/banner';
import scrollTop from '../../utils/scrollTop';
import bannerInfoList from '../../assets/json-data/price-list.json';

function PricePage(props) {
    useEffect(()=>{
        scrollTop();
    },[])
    return (
        <div>
            <title>Giá bán | Akari</title>
            <Banner 
                seeLinkStatus={false}
                bannerType={0}
                bannerTitle="Cập nhật giá bán"
                bannerInfoList={bannerInfoList}
            />
        </div>
    );
}

export default PricePage;