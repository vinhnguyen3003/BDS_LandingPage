import React from 'react';
import Banner from '../../components/banner/banner';
import bannerInfoList from '../../assets/json-data/rental-price-list.json';

function RentalPricePage(props) {
    return (
        <div>
            <Banner 
                seeLinkStatus={false}
                bannerType={1}
                bannerTitle="Giá cho thuê"
                bannerInfoList={bannerInfoList}
            />
        </div>
    );
}

export default RentalPricePage;