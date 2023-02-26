import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchMoneyPosts } from '../../../utils/Api';
import { getMoneyError, getMoneyStatus, selectAllMoney } from './MoneySlice';
import '../postsList.css';

const MoneyList = () => {
    const money= useSelector(selectAllMoney);
    const moneyStatus= useSelector(getMoneyStatus);
    const moneyError= useSelector(getMoneyError);

    const dispatch= useDispatch();

    useEffect(()=>{
        if(moneyStatus==="200"){
            dispatch(fetchMoneyPosts());
        }

    },[dispatch, moneyStatus]);

    let content;
    if(moneyStatus==="loading"){
        content= <p>"is loading..."</p>
    } else if(moneyStatus==="succeeded"){
        content= money.map((moneyp, index)=>{
            return(
            <article key={index} className="article-view">
                <NavLink to={`/money/${moneyp.data.title}`}><h3 className='article-title'>{moneyp.data.title}</h3></NavLink>
                <p className='aricle-body'>{moneyp.data.selftext.substring(0, 100)}...</p>
            </article>)
        })

    } else if(moneyStatus==="failed"){
        content= <p>{moneyError}</p>
    }

    return (

        <section>{content}</section>
    );
};

export default MoneyList;