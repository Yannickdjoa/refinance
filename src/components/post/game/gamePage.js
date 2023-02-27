import React from 'react'
import { useParams } from 'react-router-dom';
import '../postPage.css';

const GamePage = ({games}) => {
  const {gaId}= useParams();
  
  if (!games) {
      return (
          <section>
              <h2>game not found!</h2>
          </section>
      )
      
  }
return (
  <section>
    <div>
      {games.filter((game)=>game.data.title=== gaId).map((game, index)=>(
        <article key={index}>
          <h3>{game.data.title}</h3>
          <p>{game.data.selftext}</p>
        </article>))}
    </div>
    
  </section>
  
);
};

export default GamePage
