import React from 'react';
import {SearchButton} from "../../dummyComponents/button/searchButton/SearchButton";
import {SettingButton} from "../../dummyComponents/button/settingButton/SettingButton";
import {LoginButon}  from "../../dummyComponents/button/login-signup/LoginButon";
import {LogoSetting} from '../../dummyComponents/button/imgButton/LogoSetting';

function NavBar(props) {
    return (
        <React.Fragment>
            <LogoSetting/>
            <SearchButton/>
            <SettingButton/>
            <LoginButon/>
        </React.Fragment>
    );
}

export default NavBar;