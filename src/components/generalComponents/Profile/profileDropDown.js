import React from 'react';
import { profileItems } from "../../NavbarItems";
import { Link } from "react-router-dom";

export const ProfileDropDown= ()=> {
    return (
        <div>
            <ul className='profile-drop'>
                {profileItems.map(item=>{
                    return(
                        <li key={item.id}  className={item.cName}>
                            <Link to={item.path}>{item.title}</Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
