import { createSlice } from '@reduxjs/toolkit'
import { searchPosts } from '../../utils/Api';

const researchSlice = createSlice({
    name:"search",
    initialState:{
       query: '',
       searchResult: [],
       status: '200',
       error: null

    },
    reducers:{
        getSearchInfo: (state, action)=>{
            state.query= action.payload;

        },
    },
    extraReducers(builder){
        builder
           .addCase(searchPosts.pending, (state, action)=>{
            state.status= 'loading'
        })
        .addCase(searchPosts.fulfilled, (state, action)=>{
            state.status= 'succeeded';
            state.searchResult= action.payload;
        })
        .addCase(searchPosts.rejected, (state, action)=>{
            state.status= 'failed'
        })
    },
})

export const selectResearch= (state)=>state.search;
export const {getSearchInfo}= researchSlice.actions;
export default researchSlice.reducer;

