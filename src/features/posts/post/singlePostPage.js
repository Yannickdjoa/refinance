import React from 'react'
import { useSelector } from 'react-redux';
import { selectPostById } from '../postsSlice';

import { useParams } from 'react-router-dom'

const SinglePostPage = () => {
    const {postId}= useParams();
    const post= useSelector((state)=>selectPostById(state, Number(postId)));
    if (!post) {
        return (
            <section>
                <h2>post not found!</h2>
            </section>
        )
        
    }
  return (
    <article>
      <h3>{post.data.title}</h3>
      <p>{post.data.selftext}</p>
    </article>
  )
}

export default SinglePostPage
