import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchInvestmentsPosts } from '../../../utils/api';
import { getInvestmentsError, getInvestmentsStatus, selectAllInvestments } from './investmentsSlice';
import '../postsList.css';

const InvestmentsList = () => {
    const investments= useSelector(selectAllInvestments);
    const investmentsStatus= useSelector(getInvestmentsStatus);
    const investmentsError= useSelector(getInvestmentsError);

    const dispatch= useDispatch();

    useEffect(()=>{
        if(investmentsStatus==="200"){
            dispatch(fetchInvestmentsPosts());
        }

    },[dispatch, investmentsStatus]);

    let content;
    if(investmentsStatus==="loading"){
        content= <p>"is loading..."</p>
    } else if(investmentsStatus==="succeeded"){
        content= investments.map((investment, index)=>{
            return(
            <article key={index} className="article-view">
                <NavLink to={`/investments/${investment.data.title}`}><h3 className='article-title'>{investment.data.title}</h3></NavLink>
                <p className='aricle-body'>{investment.data.selftext.substring(0, 100)}...</p>
            </article>)
        })

    } else if(investmentsStatus==="failed"){
        content= <p>{investmentsError}</p>
    }

    return (

        <section>{content}</section>
    );
};

export default InvestmentsList;