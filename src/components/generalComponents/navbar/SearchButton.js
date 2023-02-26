import { NavLink, useLocation } from 'react-router-dom';
import {BiSearch} from 'react-icons/bi';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearQuery, getQueryTerm, setQuery } from '../../Search/researchSlice';
import { useNavigate, createSearchParams } from 'react-router-dom';
import './navbar.css';

export const SearchButton = () => {
  let location= useLocation();
  let query= useSelector(getQueryTerm);
  const dispatch= useDispatch();
  const navigate= useNavigate();
 
  let handleQueryChange= (e)=>{
    dispatch(setQuery(e.target.value));
   };
  const handleSubmit= (e)=> {
    if (query === "") return alert("Please enter search term!");
    e.preventDefault();
    navigate({
        pathname: 'search',
        search: `?${ createSearchParams ({
            q: query
        })}`
    });
  };

  useEffect(()=>{
    if(location.pathname!=="/search"){
      dispatch(clearQuery());
    }
  }, [dispatch, location]);
  

  return (
    <div>
      <form onSubmit={handleSubmit} className='search_form'>
        <input
            type='text'
            placeholder='search...'
            onChange={handleQueryChange}
            className='search_input'
            value={query}
        />
        <button className='btn-icon' type='submit'>
            <NavLink to={'/search'}><BiSearch/></NavLink>
        </button>
      </form>
      
    </div>
  )
}

