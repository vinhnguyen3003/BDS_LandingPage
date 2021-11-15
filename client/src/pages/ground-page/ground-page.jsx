import React, { useEffect } from 'react';
import Ground from '../../components/ground/ground';
import scrollTop from '../../utils/scrollTop';

function GroundPage() {
    useEffect(()=>{
        scrollTop();
    },[])
    return (
        <div>
            <title>Mặt bằng | Akari</title>
            <Ground status={true}/>
        </div>
    );
}

export default GroundPage;