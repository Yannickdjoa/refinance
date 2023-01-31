import React from 'react'
import {  NavLink } from 'react-router-dom';


const PostPage = ({post}) => {

  return (
    <article>
      <NavLink ><h3>{post.data.title}</h3></NavLink>
      <p>{post.data.selftext.substring(0, 100)}...</p>
    </article>
		)
}

export default PostPage
