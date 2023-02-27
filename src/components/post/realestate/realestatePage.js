import React from 'react';
import { useParams } from 'react-router-dom';
import '../postPage.css';

const RealestatePage = ({realestate}) => {
    const {realId}= useParams();
    
    if (!realestate) {
        return (
            <section>
                <h2>post not found!</h2>
            </section>
        )
        
    }
  return (
    <section>
      <div>
        {realestate.filter((real)=>real.data.title=== realId).map((real, index)=>(
          <article key={index}>
            <h3>{real.data.title}</h3>
            <p>{real.data.selftext}</p>
          </article>))}
      </div>
      
    </section>
    
  );
};

export default RealestatePage
