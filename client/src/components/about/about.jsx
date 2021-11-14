import React from 'react';
import './about.scss';
import AboutImg from '../../assets/images/about.jpg';

function About({reverse}) {
    return (
        <section className={`section-wrapper section-about ${reverse ? '--reverse' : ''}`}>
            <div className="section-image">
                <div className="section-image__wrapper">
                    <img src={AboutImg} alt="" />
                </div>
            </div>
            <div className="section-content">
                <div className="section-content__wrapper">
                    <div className="section-content-title section-about-title">
                        <h2>Akari - Thành phố của ánh sáng</h2>
                    </div>
                    <div className="section-content-body section-about-body">
                    “Akari” trong tiếng Nhật mang ý nghĩa Ánh Sáng. Đó là Ánh Sáng rực rỡ của những khu thương mại năng động và sầm uất, là Ánh Sáng ấm áp của những tổ ấm cho các gia đình, là Ánh Sáng thông tuệ của cộng đồng cư dân tri thức, là Ánh Sáng của năng lượng sống dồi dào đang chảy tràn khắp khu đô thị. Hãy làm “sáng bừng” cuộc sống của bạn với Akari City ngay hôm nay!
                    </div>
                    <div className="section-about-info">
                        <div className="about-info-item">
                            <span>8,5 ha</span>
                            <span>Diện tích</span>
                        </div>
                        <div className="about-info-item">
                            <span>5,000</span>
                            <span>Số căn hộ</span>
                        </div>
                        <div className="about-info-item">
                            <span>42 m</span>
                            <span>Lộ giới Đại lộ thương mại</span>
                        </div>
                        <div className="about-info-item">
                            <span>23,000 <span>m<sup>2</sup></span></span>
                            <span>Diện tích thương mại và văn phòng</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;