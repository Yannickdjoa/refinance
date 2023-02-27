import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchRealestatePosts } from '../../../utils/api';
import { getRealestateError, getRealestateStatus, selectAllRealestate } from './realestateSlice';
import '../postsList.css';

const RealestateList = () => {
    const realestate= useSelector(selectAllRealestate);
    const realestateStatus= useSelector(getRealestateStatus);
    const realestateError= useSelector(getRealestateError);

    const dispatch= useDispatch();

    useEffect(()=>{
        if(realestateStatus==="200"){
            dispatch(fetchRealestatePosts());
        }

    },[dispatch, realestateStatus]);

    let content;
    if(realestateStatus==="loading"){
        content= <p>"is loading..."</p>
    } else if(realestateStatus==="succeeded"){
        content= realestate.map((real, index)=>{
            return(
            <article key={index} className="article-view">
                <NavLink to={`/realestate/${real.data.title}`}><h3 className='article-title'>{real.data.title}</h3></NavLink>
                <p className='aricle-body'>{real.data.selftext.substring(0, 100)}...</p>
            </article>)
        })

    } else if(realestateStatus==="failed"){
        content= <p>{realestateError}</p>
    }

    return (

        <section>{content}</section>
    )
}

export default RealestateList;