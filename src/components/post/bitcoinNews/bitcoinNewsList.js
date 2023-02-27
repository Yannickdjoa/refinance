import React, { useEffect } from 'react';
import { fetchBitcoinPosts } from '../../../utils/api';
import '../postsList.css';

import { selectAllBitcoin, getBitcoinStatus, getBitcoinError } from './bitcoinSlice';

import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const BitcoinNewsList = () => {
    const dispatch= useDispatch();
    const bitcoinNews= useSelector(selectAllBitcoin);
    const bitcoinNewsStatus= useSelector(getBitcoinStatus);
    const bitcoinError= useSelector(getBitcoinError);

    useEffect(()=>{
        if(bitcoinNewsStatus==="200"){
            dispatch(fetchBitcoinPosts())
        }
    }, [bitcoinNewsStatus, dispatch]   
    );

    let content;
    if (bitcoinNewsStatus==="loading"){
        content= <p>is loading...</p>
    }else if (bitcoinNewsStatus=== "succeeded") {
        content= bitcoinNews.map((bit, index)=>{
            return (
            <article key={index} className="article-view">
                <NavLink to={`/bitcoinnews/${bit.data.title}`} ><h3 className='article-title'>{bit.data.title}</h3></NavLink>
                <p className='aricle-body'>{bit.data.selftext.substring(0, 100)}...</p>
            </article>)
        })
        
    } else if(bitcoinNewsStatus==='failed') {
        content = <div>{bitcoinError}</div>;
        
    }

  return (
    <section>
       {content}
    </section>
  )
}

export default BitcoinNewsList
