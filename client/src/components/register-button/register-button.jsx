import React from 'react';
import { Link } from 'react-router-dom';
import './register-button.scss';
import {useLocation} from 'react-router';

function RegisterButton() {
    const location = useLocation();
    return (
        <div className={`register-button ${location.pathname === '/contact' ? '--hide' : ''}`}>
            <Link to="/akari-city/contact">
                <i className="fas fa-pencil-alt"></i>
                Đăng ký
            </Link>
        </div>
    );
}

export default RegisterButton;