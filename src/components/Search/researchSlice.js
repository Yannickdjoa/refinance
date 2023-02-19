import { createSlice } from '@reduxjs/toolkit';
import { searchPosts } from '../../utils/Api';

const searchSlice = createSlice({
    name:"search",
    initialState:{
       query:"",
       searchResult: [],
       loading: false,
       error: null,

    },
    reducers:{
        setQuery: (state, action)=>{
            state.query= action.payload;

        },
        clearQuery: (state, action) => {
            state.query = '';
        }
    },
    extraReducers(builder){
        builder
            .addCase( searchPosts.pending, (state) => {
            state.loading= true;
            state.searchResult= [];
            state.error=null;
           })
           .addCase (searchPosts.fulfilled, (state, action) => {
            state.loading= false;
            state.error= null;
            state.searchResult = action.payload;
           })
           
           .addCase( searchPosts.rejected, (state, action) => {
            state.loading= false;
            state.error= action.error.message;
            state.searchResult= [];
           });
    },
});


export let selectResearch= (state)=>state.search;
export const getQueryTerm= (state)=>state.search.query;

export const {setQuery, clearQuery }= searchSlice.actions;
export default searchSlice.reducer;

