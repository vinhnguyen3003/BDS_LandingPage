import React, { useEffect } from 'react';
import Banner from '../../components/banner/banner';
import scrollTop from '../../utils/scrollTop';

function PricePage(props) {
    useEffect(()=>{
        scrollTop();
    },[])
    return (
        <div>
            <Banner />
        </div>
    );
}

export default PricePage;