import React from 'react'
import { useParams } from 'react-router-dom';
import '../postPage.css';

const InspirationPage = ({inspirations}) => {
  const {inspId}= useParams();
  
  if (!inspirations) {
      return (
          <section>
              <h2>inspiration not found!</h2>
          </section>
      )
      
  }
return (
  <section>
    <div>
      {inspirations.filter((inspiration)=>inspiration.data.title=== inspId).map((inspiration, index)=>(
        <article key={index}>
          <h3>{inspiration.data.title}</h3>
          <p>{inspiration.data.selftext}</p>
        </article>))}
    </div>
    
  </section>
  
)
}

export default InspirationPage
