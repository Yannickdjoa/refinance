import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import './sideBar.css';
import { SideBarItems } from '../itemsList';
import { FaBars } from "react-icons/fa";

export const SideBar= ({children}) => {


    const[isOpen, setIsOpen]= useState(false);
    const toggle = ()=>setIsOpen(!isOpen);
    return (
        <div className='conatainer'>
            <div style={{width: isOpen ? "220px" : "50px"}} className='sidebar-subref'>
                <div className='subrefinance-btn'>
                    <h1 style={{display: isOpen ? "block" : "none"}} className="subreddit-title">SubRefinance</h1>
                    <div className='bars'>
                        <FaBars onClick={toggle}/>
                    </div>
                    
                </div>
                {
                    SideBarItems.map((sideItem)=>(
                       (
                        <NavLink to={sideItem.path} key={sideItem.id} className={sideItem.cName} activeclassname='active'>
                            <div className='sidebar-icon'>{sideItem.icon}</div>
                            <div className='sidebar-titles' style={{display: isOpen ? "block" : "none"}}>{sideItem.title}</div>
                        </NavLink>
                        )
                    ))
                }
            </div>
            <main>{children}</main>
        </div>
        );
   }