import React, { useEffect } from 'react';
import About from '../../components/about/about';
import scrollTop from '../../utils/scrollTop';

function AboutPage() {
    useEffect(()=>{
        scrollTop();
    },[])
    return (
        <div>
            <title>Giới thiệu | Akari</title>
            <About reverse={true}/>
        </div>
    );
}

export default AboutPage;