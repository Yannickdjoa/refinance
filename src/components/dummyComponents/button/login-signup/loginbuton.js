import React from 'react';
import profileIcon from '../../../../assets/images/profileIcon.JPG'

export const LoginButon= ()=> {
    return (
        <div>
            <button onClick={onclick}>
                <img src={profileIcon} alt='profile button'/>
            </button>
        </div>
    );
}

