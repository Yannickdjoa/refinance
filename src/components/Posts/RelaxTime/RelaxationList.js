import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchRelaxationPosts } from '../../../utils/Api';
import { getRelaxationError, getRelaxationStatus, selectAllRelaxation } from './RealaxationSlice';
import '../postsList.css';

const RelaxationList = () => {
    const relaxation= useSelector(selectAllRelaxation);
    const relaxationStatus= useSelector(getRelaxationStatus);
    const relaxationError= useSelector(getRelaxationError);

    const dispatch= useDispatch();

    useEffect(()=>{
        if(relaxationStatus==="200"){
            dispatch(fetchRelaxationPosts());
        }
    },[dispatch, relaxationStatus]
        
    )

    let content;
    if(relaxationStatus==="loading"){
        content= <p>"is loading..."</p>
    }else if(relaxationStatus==="succeeded"){
        content= relaxation.map((relax, index)=>{
            return(
                <article key={index} className="article-view">
                     <NavLink to={`/relaxation/${relax.data.title}`}><h3 className='article-title'>{relax.data.title}</h3></NavLink>
                     <p className='aricle-body'>{relax.data.selftext.substring(0, 100)}...</p>
                </article>
            )
        }    
        )
    }else if(relaxationStatus==="failed"){
        content=<p>{relaxationError}</p>
    }

    return (
        <div>
            <h1>{content}</h1>
        </div>
    );
};

export default RelaxationList;