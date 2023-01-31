import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const POSTS_URL= "https://www.reddit.com/r/crypto/new.json";



export const fetchPostsByTitle= createAsyncThunk(
    "posts/fetchPostsByTitle", 
    
    async ()=>{
        try {
            const response= await axios.get(POSTS_URL);
            console.log(response);
            return [...response.data.data.children];
            
        } catch (error) {
            return error.message
        }
    }
);

export const searchPosts= createAsyncThunk(
    "search/searchPosts",
    async(query)=>{
        const response= await fetch(`https://www.reddit.com/subreddits/search.json?q=${query}&limit=25`);
        console.log(response);
        const data= await response.json();
        return data.data.children.map((subreddit)=>subreddit.data);
    }
)

