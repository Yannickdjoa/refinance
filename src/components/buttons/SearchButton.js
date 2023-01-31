import React, { useEffect } from 'react';
import { BiSearch } from "react-icons/bi";
import { useDispatch, useSelector } from 'react-redux';
import { searchPosts } from '../../utils/Api';
import "./buttons.css";

import { selectResearch, getSearchInfo } from '../../features/Research/researchSlice';

export const SearchButton=({setSearchResults})=> {
    const [term, setTerm]= useSelector(selectResearch);
    const dispatch= useDispatch();

    const handleChange= (e)=> setTerm(e.target.value);
    const handleSubmit= (e)=>{
        e.preventDefault();
        dispatch((e)=>getSearchInfo(e.target.value));
        
    };

    useEffect(()=>{
        dispatch(searchPosts(term));
    }, [term, dispatch]);

   
    
    return (
        <div className='btn'>
            <form className='search_form' onSubmit={handleSubmit}>
                <label for='search'>
                    <input
                        type='text'
                        className='search_input'
                        name='search'
                        id='search'
                        onChange={handleChange}
                        placeholder='search...'
                        value={term}
                    />
                    
                </label>
                <button className='btn-icon' type='submit'>
                    <BiSearch/>
                </button>
                
            </form>
        </div>
    );
}
