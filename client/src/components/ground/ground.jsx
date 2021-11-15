import React, { useState } from 'react';
import './ground.scss';
import GroundImg from '../../assets/images/ground.jpg';
import GroundImgMobile from '../../assets/images/ground-mobile.jpg';
import { Link } from 'react-router-dom';
import GroundImg01_1 from '../../assets/images/ground01_1.jpg';
import GroundImg01_2 from '../../assets/images/ground01_2.jpg';
import GroundImg02_1 from '../../assets/images/ground02_1.jpg';
import GroundImg02_2 from '../../assets/images/ground02_2.jpg';
import GroundImg03_1 from '../../assets/images/ground03_1.jpg';
import GroundImg03_2 from '../../assets/images/ground03_2.jpg';
import GroundImg04_1 from '../../assets/images/ground04_1.jpg';
import GroundImg04_2 from '../../assets/images/ground04_2.jpg';
import GroundImg05_1 from '../../assets/images/ground05_1.jpg';
import GroundImg05_2 from '../../assets/images/ground05_2.jpg';
import GroundImg06_1 from '../../assets/images/ground06_1.jpg';
import GroundImg06_2 from '../../assets/images/ground06_2.jpg';
import scrollTop from '../../utils/scrollTop';


const groundInfoItem = [
    {
        "groundName": "Khu căn hộ Akari 1",
        "groundInfo": [
            {
                "title": "Tầng 3",
                "image": GroundImg01_1
            },
            {
                "title": "Tầng 4-21",
                "image": GroundImg01_2
            }
        ]
    },
    {
        "groundName": "Khu căn hộ Akari 2",
        "groundInfo": [
            {
                "title": "Tầng 3",
                "image": GroundImg02_1
            },
            {
                "title": "Tầng 4-21",
                "image": GroundImg02_2
            }
        ]
    },
    {
        "groundName": "Khu căn hộ Akari 3",
        "groundInfo": [
            {
                "title": "Tầng 3",
                "image": GroundImg03_1
            },
            {
                "title": "Tầng 4-21",
                "image": GroundImg03_2
            }
        ]
    },
    {
        "groundName": "Khu căn hộ Akari 4",
        "groundInfo": [
            {
                "title": "Tầng 3",
                "image": GroundImg04_1
            },
            {
                "title": "Tầng 4-21",
                "image": GroundImg04_2
            }
        ]
    },
    {
        "groundName": "Khu căn hộ Akari 5",
        "groundInfo": [
            {
                "title": "Tầng 3",
                "image": GroundImg05_1
            },
            {
                "title": "Tầng 4-21",
                "image": GroundImg05_2
            }
        ]
    },
    {
        "groundName": "Khu căn hộ Akari 6",
        "groundInfo": [
            {
                "title": "Tầng 3",
                "image": GroundImg06_1
            },
            {
                "title": "Tầng 4-21",
                "image": GroundImg06_2
            }
        ]
    }
]
function Ground({status}) {
    const [groundModalStatus, setGroundModalStatus] = useState(false);
    const [groundActive, setGroundActive] = useState({});
    const [groundInfoActive, setGroundInfoActive] = useState(0);

    const handleClickGroundInfo = (groundInfoItem) => {
        setGroundModalStatus(true);
        setGroundActive(groundInfoItem);
    }
    const closeGroundModal = () => {
        setGroundModalStatus(false);
        setGroundInfoActive(0);
        scrollTop();
    }
    return (
        <section className="section-wrapper section-ground --unset-height">
            {
                !groundModalStatus ?
                <>
                    <div className="section-ground-image">
                        <img className="section-ground-image__nor" src={GroundImg} alt="" />
                        <img className="section-ground-image__res" src={GroundImgMobile} alt="" />
                    </div>
                    {
                        !status ?
                            <div className="section-ground-see">
                                <Link to="/ground">
                                    Xem thông tin chi tiết
                                </Link>
                            </div> : 
                            <div className="section-ground-info">
                                <div className="ground-info-title">
                                    <h2>Mặt bằng</h2>
                                </div>
                                <div className="ground-info-list">
                                    {
                                        groundInfoItem.map((grInIt, index)=>(
                                            <div 
                                                className="ground-info-item" 
                                                key={index}
                                                onClick={()=>handleClickGroundInfo(grInIt)}
                                            >
                                                <span>{grInIt.groundName}</span>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            
                    }
                </> :
                    <div className="ground-page-modal-wrapper">
                        <div className="ground-page-modal">
                            <div className="ground-page-modal__top">
                                <div className="ground-modal-title">
                                    {groundActive.groundName}
                                </div>
                                <div className="ground-modal-info">
                                    {
                                        groundActive.groundInfo.map((grAc, index)=>(
                                            <span 
                                                key={index}
                                                className={`ground-modal-info__item ${groundInfoActive === index ? '--active' : ''}`}
                                                onClick={()=>setGroundInfoActive(index)}
                                            >
                                                {grAc.title}
                                            </span>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="ground-page-modal__center">
                                {
                                    groundActive.groundInfo.map((grAc, index)=>(
                                        groundInfoActive === index ?
                                            <div 
                                                className="ground-modal-image"
                                                key={index}
                                            >
                                                <img src={grAc.image} alt=""/>
                                            </div> : null
                                    ))
                                }
                            </div>
                            <div 
                                className="ground-page-modal__bottom"
                                onClick={closeGroundModal}
                            >
                                <span><i className="fas fa-undo-alt"></i></span>
                                Quay về mặt bằng tổng quan
                            </div>
                        </div>
                    </div>
            }
        </section>
    );
}

export default Ground;