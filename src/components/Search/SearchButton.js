import React, { useEffect } from 'react';
import { BiSearch } from "react-icons/bi";
import { useDispatch, useSelector} from 'react-redux';
import "./buttons.css";

import { NavLink, useLocation, useNavigate, createSearchParams } from 'react-router-dom';
import { clearTerm, getSearchInfo, queryTerm } from './researchSlice';


export const SearchButton = () => {
    let query= useSelector(queryTerm);
    const dispatch= useDispatch();
    const location=useLocation();
    const navigate= useNavigate();
    
    const handleQueryChange= (e)=> dispatch(getSearchInfo(e.target.value));

    const handleSubmit= (e)=> {
        if (query === "") return alert("Please enter search term!");
        e.preventDefault();
        navigate({
            pathname: 'home',
            search: `?${ createSearchParams ({
                q: query
            })}`
        });
    };
    useEffect(() => {
        if (location.pathname !== '/home') {
            dispatch(clearTerm());
        }
    }, [location, dispatch]);   

  return (
    <div>
      <form onSubmit={handleSubmit} className='search_form'>
        <input
            type='search'
            placeholder='search...'
            onChange={handleQueryChange}
            className='search_input'
            value={query}
        />
        <button className='btn-icon' type='submit'>
            <NavLink to={'/home'}><BiSearch/></NavLink>
        </button>
      </form>
    </div>
  )
}


