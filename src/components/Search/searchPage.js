import React from 'react';
import { useParams } from 'react-router-dom';

const SearchPage = ({searchPost}) => {
    const {searchId}= useParams();
    
    if (!searchPost) {
        return (
            <section>
                <h2>post not found!</h2>
            </section>
        )
        
    }
  return (
    <section>
      <div>
        {searchPost.filter((sear)=>sear.title=== searchId).map((sear, index)=>(
          <article key={index}>
            <h3>{sear.title}</h3>
            <p>{sear.selftext}</p>
          </article>))}
      </div>
      
    </section>
    
  );
}

export default SearchPage;
