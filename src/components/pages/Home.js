import {  useSearchParams } from 'react-router-dom';
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchError, getSearchStatus, selectResearch } from '../Search/researchSlice';
import { searchPosts } from '../../utils/Api';
import { NavLink } from 'react-router-dom';
import { SearchButton } from '../Search/SearchButton';


const Home= ()=> {
  let queryResult= useSelector(selectResearch);
  let [searchParams]= useSearchParams();
  let query= searchParams.get('q');
  const queryStatus= useSelector(getSearchStatus);
	const error= useSelector(getSearchError);

  const dispatch= useDispatch();

  useEffect(()=>{
    dispatch(searchPosts(query));
  }, [dispatch, query, error]);

 
 
 
  return (
    <div>
       hello world
    </div>
  )

  }

export default Home;
