import React from 'react';
import SettingsIcon from '../../../../assets/images/SettingsIcon.svg';
import './settingButton.css';

export const SettingButton= (props)=> {
	return (
        <div className='header'>
            <img src={SettingsIcon} alt='Settings icon' className='settings-icon'/>;
        </div>
	)
};
