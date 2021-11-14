import React from 'react';
import './header.scss';
import LogoImg from '../../assets/images/logo.png';
import PhoneCall from '../../assets/images/phone-call.png';
import headerMenuContent from '../../assets/json-data/header-menu-content.json';
import { Link } from 'react-router-dom';
import {useLocation} from 'react-router';

function Header() {
    const location = useLocation();

    const activeHeaderItem = headerMenuContent.findIndex(heMeCo => heMeCo.link === location.pathname);

    return (
        <div className="header-wrapper">
            <div className="header">
                <div className="header__left">
                    <Link to="/" className="header-left-logo">
                        <img src={LogoImg} alt="" />
                    </Link>
                </div>
                <div className="header__center">
                    <ul className="header-center-list">
                        {
                            headerMenuContent.map((heMeCo, index)=>(
                                <li 
                                    key={index}
                                    className={`header-center-item ${index === activeHeaderItem ? '--active' : ''}`}
                                >
                                    <Link to={heMeCo.link}>
                                        {heMeCo.content}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="header__right">
                    <a href="tel:0938330378">
                        <div className="header-right-icon">
                            <img src={PhoneCall} alt="" />
                        </div>
                        <span>0938 330378</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Header;