import { configureStore } from '@reduxjs/toolkit';
import postsReducer from "../components/Posts/CryptoMarket/CryptoMarketSlice";
import researchReducer from "../components/Search/researchSlice";



export const store = configureStore({
  reducer: {
    posts: postsReducer,
    search: researchReducer, 
  },
});
