import React from 'react';
import { BiSearch } from "react-icons/bi";
import "./buttons.css";

export const SearchButton=()=> {
    const handleSearchChange='';
    return (
        <div className='btn'>
            <form method='POST' action=''>
                <label for='search'>
                    <input
                        type='text'
                        name='search'
                        value= 'Search...'
                        id='search'
                        onChange={handleSearchChange}
                    />
                    
                </label>
                <button className='btn-icon' type='submit'>
                    <BiSearch/>
                </button>
                
            </form>
        </div>
    );
}
