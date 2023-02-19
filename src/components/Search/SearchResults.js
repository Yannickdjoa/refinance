import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink} from "react-router-dom";
import { searchPosts } from "../../utils/Api";
import { getQueryTerm, selectResearch } from "./researchSlice";

const SearchResults= ()=> {
let {error, loading, searchResult}= useSelector(selectResearch);
let dispatch= useDispatch();
let query= useSelector(getQueryTerm);

useEffect(()=>{
dispatch(searchPosts(query))
},[query, dispatch, error]);

return (
  <div>
    {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {searchResult.map((post, index)=> {
        return(
        <article key={index}>
          <NavLink to={`/search/${post.title}`}><h3>{post.title}</h3></NavLink>
          <p>{post.selftext}</p>
        </article>
      )})
    }
  </div>)
 }

export default SearchResults;

