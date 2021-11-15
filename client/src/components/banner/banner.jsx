import React from 'react';
import './banner.scss';
import HotIcon from '../../assets/images/hot-icon.gif';
import price01 from '../../assets/images/price.jpg';
import price02 from '../../assets/images/price02.jpg';
import price03 from '../../assets/images/price03.jpg';
import rentalPrice01 from '../../assets/images/rental-price01.jpg';
import rentalPrice02 from '../../assets/images/rental-price02.jpg';
import rentalPrice03 from '../../assets/images/rental-price03.jpg';
import rentalPrice04 from '../../assets/images/rental-price04.jpg';
import Coop from '../../assets/images/co-op-logo.jpg';
import Coop2 from '../../assets/images/co-op-logo02.jpg';
import Coop3 from '../../assets/images/co-op-logo04.jpg';
import Coop4 from '../../assets/images/co-op-logo05.png';
import { Link } from 'react-router-dom';


const priceImage = [price01, price02, price03];

const rentalPriceImage = [rentalPrice01, rentalPrice02, rentalPrice03, rentalPrice04]
function Banner({seeLinkStatus, bannerType, bannerTitle, bannerInfoList}) {
    return (
        <section className={`section-wrapper section-banner --reverse ${bannerType === 1 ? '--rental-price' : ''}`}>
            <div className="section-image">
                {
                        <div className={`section-image__wrapper section-banner__wrapper ${bannerType === 1 ? '--rental' : ''}`}>
                            {
                                (bannerType === 0 ? priceImage : rentalPriceImage).map((img, index)=>(
                                    <div className={`${bannerType === 0 ?'banner-image' : 'banner-image-rental'}`} key={index}>
                                        <img src={img} alt="" />
                                    </div>
                                )) 
                            }
                        </div>
                }
            </div>
            <div className="section-content">
                <div className="section-content__wrapper section-content-banner">
                    <div className="section-content-title section-banner-title">
                        <h2>{bannerTitle}</h2>
                        {
                            seeLinkStatus ?
                            <Link to="/price" className="see-all-link">Xem tất cả</Link>: null
                        }
                    </div>
                    <div className="section-banner-info">
                        {
                            bannerInfoList.map((baInLi, index) => (
                                <div className="banner-info-item" key={index}>
                                    <span>
                                        <img src={HotIcon} alt=""/>
                                    </span>
                                    <span>
                                        {baInLi.banneInfoContent}
                                    </span>
                                </div>
                            ))
                        }
                    </div>
                    {
                        bannerType === 0 ?
                            <div className="section-banner-coop-logo">
                                <div className="coop-logo-item">
                                    <img src={Coop} alt="" />
                                </div>
                                <div className="coop-logo-item">
                                    <img src={Coop2} alt="" />
                                </div>
                                <div className="coop-logo-item">
                                    <img src={Coop3} alt="" />
                                </div>
                                <div className="coop-logo-item">
                                    <img src={Coop4} alt="" />
                                </div>
                            </div> : null
                    }
                </div>
            </div>
        </section>
    );
}

export default Banner;