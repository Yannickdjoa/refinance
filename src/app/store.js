import { configureStore } from '@reduxjs/toolkit';
import postsReducer from "../features/posts/postsSlice";
import researchReducer from "../features/Research/researchSlice";



export const store = configureStore({
  reducer: {
    posts: postsReducer,
    research: researchReducer, 
  },
});
