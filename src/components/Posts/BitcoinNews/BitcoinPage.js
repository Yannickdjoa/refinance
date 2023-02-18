import React from 'react';
import { useParams } from 'react-router-dom';

const BitcoinPage = ({bitcoin}) => {

        const {bitId}= useParams();
        
        if (!bitcoin) {
            return (
                <section>
                    <h2>post not found!</h2>
                </section>
            )
            
        }
      return (
        <section>
          <div>
            {bitcoin.filter((bit)=>bit.data.title=== bitId).map((bit, index)=>(
              <article key={index}>
                <h3>{bit.data.title}</h3>
                <p>{bit.data.selftext}</p>
              </article>))}
          </div>
          
        </section>
        
      );
    };


export default BitcoinPage
