import React from 'react'
import { useParams } from 'react-router-dom';
import '../postPage.css';

const MoneyPage = ({money}) => {
  const {monId}= useParams();
  
  if (!money) {
      return (
          <section>
              <h2>money post not found!</h2>
          </section>
      )
      
  }
return (
  <section>
    <div>
      {money.filter((moneyp)=>moneyp.data.title=== monId).map((moneyp, index)=>(
        <article key={index}>
          <h3>{moneyp.data.title}</h3>
          <p>{moneyp.data.selftext}</p>
        </article>))}
    </div>
    
  </section>
  
);
};

export default MoneyPage
