import { createSlice } from '@reduxjs/toolkit';
import { searchPosts } from '../../utils/Api';

const searchSlice = createSlice({
    name:"search",
    initialState:{
       query: '',
       searchResult: [],
       isLoading: false,
       error: false,

    },
    reducers:{
        getSearchInfo: (state, action)=>{
            state.query= action.payload;

        },
        clearTerm: (state, action) => {
            state.query = '';
        }
    },
    extraReducers(builder){
        builder
           .addCase (searchPosts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = false;
			state.searchResult = action.payload;
			
		   })
           .addCase( searchPosts.pending, (state) => {
			state.isLoading = true;
            state.error = false;
           })
		   .addCase( searchPosts.rejected, (state) => {
			state.isLoading = false;
            state.error = true;
		   })
    },
})

export let selectResearch= (state)=>state.search.searchResult;
export let queryTerm= (state)=>state.search.query;
export const getSearchStatus= (state)=>state.search.isLoading;
export const getSearchError= (state)=>state.search.error;

export const {getSearchInfo, clearTerm }= searchSlice.actions;
export default searchSlice.reducer;

