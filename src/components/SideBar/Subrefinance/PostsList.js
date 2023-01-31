import React, { useEffect }  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllPosts, getPostsError, getPostsStatus } from '../../../features/posts/postsSlice';
import { fetchPostsByTitle } from '../../../utils/Api';
import { NavLink } from 'react-router-dom';


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
        content = posts.map((post)=>{
			return(
			<article>
			   <NavLink to={"postList/:postId"} key="post.data.id"><h3>{post.data.title}</h3></NavLink>
			   <p>{post.data.selftext.substring(0, 100)}...</p>
		    </article>
			)
			}
	    )
	}else if (postsStatus==='failed') {
        content = <div>{error}</div>;
    } 
	return (
		<section>
		   <h2>Finance Market</h2>
		   {content}
		</section>
	);

}
	
export default PostsList;