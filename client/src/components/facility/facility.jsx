import React, { useState } from 'react';
import './facility.scss';
import Facility01 from '../../assets/images/facility01.jpg';
import Facility02 from '../../assets/images/facility02.jpg';
import facilityInfoItem from '../../assets/json-data/facility-info-item.json';

function Facility(props) {
    const [facilityActive, setFacilityActive] = useState(0);
    return (
        <section className="section-wrapper section-facility">
            <div className="section-image">
                <div className="section-image__wrapper section-image-facility">
                    <img 
                        src={Facility01} 
                        alt="" 
                        className={`facility-img ${facilityActive === 0 ? '--active' : ''}`}
                    />
                    <img 
                        src={Facility02} 
                        alt="" 
                        className={`facility-img ${facilityActive === 1 ? '--active' : ''}`}
                    />
                </div>
            </div>
            <div className="section-content">
                <div className="section-content__wrapper section-content-facility">
                    <div className="section-facility-control">
                        <span 
                            onClick={()=>setFacilityActive(0)}
                            className={facilityActive === 0 ? '--active' : ''}
                        >Tầng 1</span>
                        <span 
                            onClick={()=>setFacilityActive(1)}
                            className={facilityActive === 1 ? '--active' : ''}
                        >Tầng 3</span>
                    </div>
                    {
                        facilityActive === 0 ?
                        <>
                            <div className="section-content-title">
                                <h2>Tiện ích tầng 1</h2>
                            </div>
                            <div className="section-facility-info">
                                {
                                    facilityInfoItem.facility01.map((faInIt, index)=>(
                                        <div 
                                            className={`facility-info-item ${faInIt.color}`}
                                            key={index}
                                        >
                                            <span>{index + 1}</span>
                                            <span>{faInIt.content}</span>
                                        </div>
                                    ))
                                }
                            </div>
                        </> : null
                    }
                    {
                        facilityActive === 1 ?
                        <>
                            <div className="section-content-title">
                                <h2>Tiện ích tầng 3</h2>
                            </div>
                            <div className="section-facility-info">
                                {
                                    facilityInfoItem.facility02.map((faInIt, index)=>(
                                        <div 
                                            className={`facility-info-item ${faInIt.color}`}
                                            key={index}
                                        >
                                            <span>{index + 1}</span>
                                            <span>{faInIt.content}</span>
                                        </div>
                                    ))
                                }
                            </div>
                        </> : null
                    }

                </div>
            </div>
        </section>
    );
}

export default Facility;