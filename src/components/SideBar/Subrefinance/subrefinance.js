import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import './subrefinance.css';
import { SideBarItems } from "../../itemsList";
import { FaBars } from "react-icons/fa";

export const SubRefinance = ({children}) => {
    const[isOpen, setIsOpen]= useState(false);
    const toggle = ()=>setIsOpen(!isOpen);
    return (
        <div className='conatainer'>
            <div style={{width: isOpen ? "220px" : "50px"}} className='sidebar-subref'>
                <div className='subrefinance-btn'>
                    <h1>SubRefinance</h1>
                    <FaBars onClick={toggle}/>
                </div>
                {
                    SideBarItems.map((sideItem)=>(
                       (
                        <NavLink to={sideItem.path} key={sideItem.id} className={sideItem.cName} activeclassName='active'>
                            <div style={{display: isOpen ? "block" : "none"}}>{sideItem.title}</div>
                        </NavLink>
                        )
                    ))
                }
            </div>
            <main>{children}</main>
        </div>
        );
   }