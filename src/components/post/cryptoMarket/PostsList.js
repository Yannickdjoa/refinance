import React, { useEffect }  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllPosts, getPostsError, getPostsStatus } from './cryptoMarketSlice';
import { fetchPostsByTitle } from '../../../utils/api';
import { NavLink } from 'react-router-dom';
import '../postsList.css';


const PostsList=()=>{
	const dispatch= useDispatch();

	const posts= useSelector(selectAllPosts);
	const postsStatus= useSelector(getPostsStatus);
	const error= useSelector(getPostsError);
	
    useEffect(() => {
		if(postsStatus=== '200'){
			dispatch(fetchPostsByTitle());
		}
		
	}, [postsStatus, dispatch]);

   
	let content;
    if(postsStatus==='loading') {
        content = <p>"Loading..."</p>;
    } else if(postsStatus==='succeeded') {
        content = posts.map((post, index)=>{
			return(
			<article key={index} className="article-view">
			   <NavLink to={`/postsList/${post.data.title}`} ><h3 className='article-title'>{post.data.title}</h3></NavLink>
			   <p className='aricle-body'>{post.data.selftext.substring(0, 100)}...</p>
			   
		    </article>
			)
			}
	    )
	}else if (postsStatus==='failed') {
        content = <div>{error}</div>;
    } 
	return (
		<section>
		   {/* <h2>Finance Market</h2> */}
		   {content}
		</section>
	);

}
	
export default PostsList;