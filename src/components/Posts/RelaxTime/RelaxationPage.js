import React from 'react';
import { useParams } from 'react-router-dom';

const RelaxationPage = ({relaxation}) => {
        const {relaxId}= useParams();
        
        if (!relaxation) {
            return (
                <section>
                    <h2>post not found!</h2>
                </section>
            )
            
        }
      return (
        <section>
          <div>
            {relaxation.filter((relax)=>relax.data.title=== relaxId).map((relax, index)=>(
              <article key={index}>
                <h3>{relax.data.title}</h3>
                <p>{relax.data.selftext}</p>
              </article>))}
          </div>
          
        </section>
        
      );
    };


export default RelaxationPage

