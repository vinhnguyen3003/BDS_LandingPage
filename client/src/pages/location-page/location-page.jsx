import React, { useEffect } from 'react';
import Location from '../../components/location/location';
import scrollTop from '../../utils/scrollTop';

function LocationPage() {
    useEffect(()=>{
        scrollTop();
    },[])
    return (
        <div>
            <Location />
        </div>
    );
}

export default LocationPage;