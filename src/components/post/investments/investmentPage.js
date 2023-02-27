import React from 'react'
import { useParams } from 'react-router-dom';
import '../postPage.css';

const InvestmentPage = ({investments}) => {
  const {invId}= useParams();
  
  if (!investments) {
      return (
          <section>
              <h2>investment not found!</h2>
          </section>
      )
      
  }
return (
  <section>
    <div>
      {investments.filter((investment)=>investment.data.title=== invId).map((investment, index)=>(
        <article key={index}>
          <h3>{investment.data.title}</h3>
          <p>{investment.data.selftext}</p>
        </article>))}
    </div>
    
  </section>
  
);
};

export default InvestmentPage
