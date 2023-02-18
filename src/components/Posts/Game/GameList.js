import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchGamePosts } from '../../../utils/Api';
import { getGameError, getGameStatus, selectAllGame } from './GameSlice';

const GameList = () => {
    const games= useSelector(selectAllGame);
    const gamesStatus= useSelector(getGameStatus);
    const gamesError= useSelector(getGameError);

    const dispatch= useDispatch();

    useEffect(()=>{
        if(gamesStatus==="200"){
            dispatch(fetchGamePosts());
        }

    },[dispatch, gamesStatus]);

    let content;
    if(gamesStatus==="loading"){
        content= <p>"is loading..."</p>
    } else if(gamesStatus==="succeeded"){
        content= games.map((game, index)=>{
            return(
            <article key={index} className="article-view">
                <NavLink to={`/games/${game.data.title}`}><h3 className='article-title'>{game.data.title}</h3></NavLink>
                <p className='aricle-body'>{game.data.selftext.substring(0, 100)}...</p>
            </article>)
        })

    } else if(gamesStatus==="failed"){
        content= <p>{gamesError}</p>
    }

    return (

        <section>{content}</section>
    );
};

export default GameList;