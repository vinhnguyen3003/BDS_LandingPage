import React, { useEffect } from 'react';
import Ground from '../../components/ground/ground';
import scrollTop from '../../utils/scrollTop';
import './ground-page.scss';

function GroundPage() {
    useEffect(()=>{
        scrollTop();
    },[])
    return (
        <div>
            <Ground status={true}/>
        </div>
    );
}

export default GroundPage;