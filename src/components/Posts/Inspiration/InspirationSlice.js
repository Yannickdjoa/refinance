import { createSlice } from "@reduxjs/toolkit";
import { fetchInspirationPosts } from "../../../utils/Api";

export const inspirationSlice= createSlice({
    name:"inspiration",
    initialState:{
        inspiration: [],
        status:"200",
        error: null,
    },
    reducers:{
        setSelectedInspiration: (state, action)=>{
            state.selectedInspiration= action.payload
        }

    },
    extraReducers(builder){
        builder
        .addCase(fetchInspirationPosts.pending,(state)=>{
            state.status="loading"
        })
        .addCase(fetchInspirationPosts.fulfilled, (state, action)=>{
            state.status="succeeded";
            state.inspiration= action.payload
        })
        .addCase(fetchInspirationPosts.rejected, (state)=>{
            state.status="failed"
        })
    },
});

export const selectAllInspiration= (state)=>state.inspiration.inspiration;
export const getInspirationStatus= (state)=>state.inspiration.status;
export const getInspirationError= (state)=>state.inspiration.error;

export const selectedInspiration= inspirationSlice.actions;

export default inspirationSlice.reducer;