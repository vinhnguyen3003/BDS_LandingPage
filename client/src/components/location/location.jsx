import React from 'react';
import './location.scss';
import MapImg from '../../assets/images/map.gif';

function Location(props) {
    return (
        <section className="section-wrapper section-location --reverse">
            <div className="section-image">
                <div className="section-image__wrapper">
                    <img src={MapImg} alt="" />
                </div>
            </div>
            <div className="section-content">
                <div className="section-content__wrapper section-content-location">
                    <div className="section-content-title">
                        <h2>TRUNG TÂM ÁNH SÁNG PHÍA TÂY THÀNH PHỐ</h2>
                    </div>
                    <div className="section-content-body section-location-body">
                    Kết nối trực tiếp với Đại lộ Võ Văn Kiệt – tuyến đường xương sống nối liền từ phía Đông sang phía Tây của thành phố Hồ Chí Minh, Akari City sở hữu một vị trí chiến lược cả về an cư lẫn giao thương.
                    </div>
                    <div className="section-location-info">
                        <div className="location-info-item">
                            <span>1 Phút</span>
                            <span>Tận hưởng tất cả tiện ích thương mại, dịch vụ trải dọc khu đô thị.</span>
                        </div>
                        <div className="location-info-item">
                            <span>5 Phút</span>
                            <span>Đến bến xe miền Tây</span>
                        </div>
                        <div className="location-info-item">
                            <span>10 Phút</span>
                            <span>Đến bệnh viện quốc tế CIH, Triều An</span>
                        </div>
                        <div className="location-info-item">
                            <span>15 Phút</span>
                            <span>Đến siêu thị Aeon Mall, MegaMall, Chợ Lớn</span>
                        </div>
                        <div className="location-info-item">
                            <span>20 Phút</span>
                            <span>Đến chợ Lớn Quận 5, Quận 6</span>
                        </div>
                        <div className="location-info-item">
                            <span>25 Phút</span>
                            <span>Đến trung tâm Q.1</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Location;