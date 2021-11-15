import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './footer.scss';

function Footer() {

    const [alertMess, setAlertMess] = useState({});
    const [registerLoading, setRegisterLoading] = useState(false);
    const form = useRef(null);

    const sendEmail = (e) => {
        e.preventDefault();
        setRegisterLoading(true);
        emailjs.sendForm('gmail', 'Batdongsannp', form.current, 'user_TaMQA4thMAgj62hfAPXaF')
        .then((result) => {
            console.log(result.text);
            setAlertMess({alertType: 'success', content: 'Đăng kí thành công, cảm ơn bạn đã sử dụng dịch vụ'});
            setRegisterLoading(false);
            setTimeout(()=>{setAlertMess({})}, 3000)
        }, (error) => {
            console.log(error.text);
            setAlertMess({alertType: 'fail', content: 'Có lỗi xảy ra, vui lòng thử lại'})
        });

        e.target.reset();
    }
    return (
        <div className="footer-wrapper section-wrapper">
            <div className="section-image footer-left">
                <div className="section-content__wrapper footer-left__contact">
                    <div className="section-content-title footer-left-title">
                        <h2>Liên hệ</h2>
                    </div>
                    <div className="footer-left-form">
                        <h4 className="footer-left-form__commit">Quý khách vui lòng điền đầy đủ thông tin bên dưới, chúng tôi sẽ tư vấn và gửi thông tin mới của dự án cho Quý Khách trong thời gian sớm nhất.</h4>
                        <form 
                            className="footer-left-form__input"
                            onSubmit={sendEmail}
                            ref={form}
                        >
                            <div className="form-group">
                                <input
                                    required 
                                    type="text" 
                                    name="full_name" 
                                    placeholder="Họ và tên"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    required 
                                    type="email" 
                                    name="email"
                                    placeholder="Email"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text" 
                                    name="address" 
                                    placeholder="Địa chỉ *"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    required 
                                    type="text"
                                    name="phone_number" 
                                    placeholder="Điện thoại"
                                />
                            </div>
                            <div className="form-group --full">
                                <input
                                    type="text" 
                                    name="content" 
                                    placeholder="Nội dung *"
                                />
                            </div>
                            <div className="form-group --full" style={{fontSize: '1.2rem', color: '#fafafa'}}>
                                Nội dung * không bắt buộc
                            </div>
                            {
                                alertMess.alertType ? 
                                    <div className="form-group-mess">
                                        <span className={alertMess.alertType === 'success' ? '--success' : '--fail'}>
                                            {alertMess.content}
                                        </span>
                                    </div> : null
                            }
                            <div className="form-group --full --mt">
                                <button className="form-group-btn">
                                    {
                                        registerLoading ? 
                                        <span className="form-group-btn__loading"></span> :
                                        'Đăng ký'
                                    }
                                </button>
                            </div>
                        </form>
                        <div className="footer-left-form__social">
                            <a href="https://www.facebook.com/AkariiCity/?ref=pages_you_manage">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://zalo.me/Nen0938330378">
                                <i className="fas fa-sms"></i>
                            </a>
                            <a href="https://www.youtube.com/watch?v=twMnH5-TeVU">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-content footer-right">
                <div className="section-content__wrapper footer-right__wrapper">
                    <div className="section-content-title footer-right-title">
                        <h2>Thông tin liên hệ</h2>
                    </div>
                    <div className="footer-right-content">
                        <h3>Phòng kinh doanh căn hộ AKARI</h3>
                        <p>Địa chỉ: 77-79 Võ Văn Kiệt, phường An Lạc, quận Bình Tân</p>
                        <p>Hotline: 0938 330378</p>
                        <p>Email: batdongsannp@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;