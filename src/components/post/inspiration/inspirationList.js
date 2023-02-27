import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchInspirationPosts } from '../../../utils/api';
import { getInspirationError, getInspirationStatus, selectAllInspiration } from './inspirationSlice';
import '../postsList.css';

const InspirationList = () => {
    const inspirations= useSelector(selectAllInspiration);
    const inspirationsStatus= useSelector(getInspirationStatus);
    const inspirationsError= useSelector(getInspirationError);

    const dispatch= useDispatch();

    useEffect(()=>{
        if(inspirationsStatus==="200"){
            dispatch(fetchInspirationPosts());
        }

    },[dispatch, inspirationsStatus]);

    let content;
    if(inspirationsStatus==="loading"){
        content= <p>"is loading..."</p>
    } else if(inspirationsStatus==="succeeded"){
        content= inspirations.map((inspiration, index)=>{
            return(
            <article key={index} className="article-view">
                <NavLink to={`/inspirations/${inspiration.data.title}`}><h3 className='article-title'>{inspiration.data.title}</h3></NavLink>
                <p className='aricle-body'>{inspiration.data.selftext.substring(0, 100)}...</p>
            </article>)
        })

    } else if(inspirationsStatus==="failed"){
        content= <p>{inspirationsError}</p>
    }

    return (

        <section>{content}</section>
    );
};

export default InspirationList;