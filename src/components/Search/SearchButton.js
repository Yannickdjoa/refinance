import { NavLink } from 'react-router-dom';
import {BiSearch} from 'react-icons/bi';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchInfo, queryTerm } from './researchSlice';

import { useNavigate, createSearchParams } from 'react-router-dom';

export const SearchButton = () => {
  const dispatch= useDispatch();
  const navigate= useNavigate();
  let query= useSelector(queryTerm);
  const handleSubmit= (e)=> {
    if (query === "") return alert("Please enter search term!");
    e.preventDefault();
    navigate({
        pathname: 'searchPage',
        search: `?${ createSearchParams ({
            q: query
        })}`
    });
  };

  const handleQueryChange= (e)=>{
   dispatch(getSearchInfo(e.target.value));
  }

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
            <NavLink to={'/searchPage'}><BiSearch/></NavLink>
        </button>
      </form>

    </div>
  )
}

