import React from 'react'

import { useParams } from 'react-router-dom'

const SinglePostPage = ({posts}) => {
    const {postId}= useParams();
    
    if (!posts) {
        return (
            <section>
                <h2>post not found!</h2>
            </section>
        )
        
    }
  return (
    <section>
      <div>
        {posts.filter((post)=>post.data.title=== postId).map((post, index)=>(
          <article key={index}>
            <h3>{post.data.title}</h3>
            <p>{post.data.selftext}</p>
          </article>))}
      </div>
      
    </section>
    
  );
};

export default SinglePostPage
