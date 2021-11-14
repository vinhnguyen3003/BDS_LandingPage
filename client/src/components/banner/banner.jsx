import React from 'react';
import './banner.scss';
import HotIcon from '../../assets/images/hot-icon.gif';
import Test from '../../assets/images/price.jpg';
import Test2 from '../../assets/images/price02.jpg';
import Test3 from '../../assets/images/price03.jpg';
import Coop from '../../assets/images/co-op-logo.jpg';
import Coop2 from '../../assets/images/co-op-logo02.jpg';
import Coop3 from '../../assets/images/co-op-logo04.jpg';
import Coop4 from '../../assets/images/co-op-logo05.png';
import { Link } from 'react-router-dom';

function Banner(props) {
    return (
        <section className="section-wrapper section-banner --reverse">
            <div className="section-image">
                <div className="section-image__wrapper section-banner__wrapper">
                    <div className="banner-image">
                        <img src={Test} alt="" />
                    </div>
                    <div className="banner-image">
                        <img src={Test2} alt="" />
                    </div>
                    <div className="banner-image">
                        <img src={Test3} alt="" />
                    </div>
                </div>
            </div>
            <div className="section-content">
                <div className="section-content__wrapper section-content-banner">
                    <div className="section-content-title section-banner-title">
                        <h2>Cập nhật giá bán</h2>
                        <Link to="/price" className="see-all-link">Xem tất cả</Link>
                    </div>
                    <div className="section-banner-info">
                        <div className="banner-info-item">
                            <span>
                                <img src={HotIcon} alt=""/>
                            </span>
                            <span>
                                Căn 50m² 2PN 1VS từ 2,15 tỷ (đã gồm VAT)
                            </span>
                        </div>
                        <div className="banner-info-item">
                            <span>
                                <img src={HotIcon} alt=""/>
                            </span>
                            <span>
                                Căn 56m² 2PN 1VS từ 2,3 tỷ (đã gồm VAT)
                            </span>
                        </div>
                        <div className="banner-info-item">
                            <span>
                                <img src={HotIcon} alt=""/>
                            </span>
                            <span>
                                Căn 75m² 2PN 2VS từ 2,65 tỷ (đã gồm VAT)
                            </span>
                        </div>
                        <div className="banner-info-item">
                            <span>
                                <img src={HotIcon} alt=""/>
                            </span>
                            <span>
                                Căn 75m² - 79m² 2PN 2VS từ 2,8 tỷ (đã gồm VAT)
                            </span>
                        </div>
                        <div className="banner-info-item">
                            <span>
                                <img src={HotIcon} alt=""/>
                            </span>
                            <span>
                                Căn 100m² 2PN 2VS từ 2,8 tỷ (đã gồm VAT)
                            </span>
                        </div>
                        <div className="banner-info-item">
                            <span>
                                <img src={HotIcon} alt=""/>
                            </span>
                            <span>
                                Căn hộ có sân vườn riêng ở tầng 3 từ 3,1 tỷ (đã gồm VAT)
                            </span>
                        </div>
                    </div>
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
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;