import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const POSTS_URL= "https://www.reddit.com/r/crypto/new.json";
const BITCOIN_URL= "https://www.reddit.com/r/bitcoin/new.json";
const RELAX_URL="https://www.reddit.com/r/Relax.json";
const GAME_URL= "https://www.reddit.com/r/game/new.json";
const REALESTATE_URL= "https://www.reddit.com/r/realestateinvesting/new.json";
const INVESTMENTS_URL="https://www.reddit.com/r/investment/new.json";
const INSPIRATION_URL="https://www.reddit.com/r/inspiration/new.json";
const MONEY_URL= "https://www.reddit.com/r/Money/new.json";


export const fetchPostsByTitle= createAsyncThunk(
    "posts/fetchPostsByTitle",   
    async ()=>{
        try {
            const response= await axios.get(POSTS_URL);
            return [...response.data.data.children];
        } catch (error) {
            return error.message
        }
    }
);

export const fetchBitcoinPosts= createAsyncThunk(
    "bitcoin/fetchBitcoinPosts", 
    
    async ()=>{
        try {
            const res= await axios.get(BITCOIN_URL);
            return res.data.data.children;
        } catch (error) {
            return error.message
        }
    }
);

export const fetchRelaxationPosts= createAsyncThunk(
    "relaxation/fetchRelaxationPosts",
    async ()=>{
        try{
            const response= await axios.get(RELAX_URL);
            return response.data.data.children;
      } catch(error){
        return error.message
  
      }
    }
    
);

export const fetchRealestatePosts= createAsyncThunk(
    "realestate/fetchRealestatePosts",
    async()=>{
        try{
            const response= await axios.get(REALESTATE_URL);
            return response.data.data.children;

        }catch(error){
            return error.message
        }
    }
);

export const fetchGamePosts= createAsyncThunk(
    "game/fetchGamePosts",
    async ()=>{
        try{
            const response= await axios.get(GAME_URL);
            return response.data.data.children;
        }catch(error){
            return error.message
        }
    }
);

export const fetchInvestmentsPosts= createAsyncThunk(
    "investments/fetchInvestmentsPosts",
    async ()=>{
        try{
            const response= await axios.get(INVESTMENTS_URL);
            return response.data.data.children;

        }catch(error){
            return error.message
        }
    }
);

export const fetchInspirationPosts= createAsyncThunk(
    "inspiration/fetchInspirationPosts",
    async()=>{
        try{
            const response= await axios.get(INSPIRATION_URL);
            return response.data.data.children
        }catch(error){
            return error.message;
        }
    }
);

export const fetchMoneyPosts= createAsyncThunk(
    "money/fetchMoneyPosts",
    async()=>{
        try{
            const response= await axios.get(MONEY_URL);
            return response.data.data.children;
        }catch(error){
            return error.message;
        }
    }
);


export const searchPosts= createAsyncThunk(
    "search/searchPosts",
    async(query)=>{
        const response2= await fetch(`https://www.reddit.com/subreddits/search.json?q=${query}&limit=25`);
        const data= await response2.json();
        console.log(data);
        return data.data.children.map(post=>post.data);
    }
)

