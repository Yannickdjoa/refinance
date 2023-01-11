import React from 'react';
import logo from "../../../../assets/images/logo.svg";
import './logoSetting.css';

export const LogoSetting= (props)=> {
    return (
        <div className='header'>
            <img src={logo} alt='logo' className='logo-image'/>
            <h3 className='logo-text'>Refinance</h3>
        </div>
    );
}
