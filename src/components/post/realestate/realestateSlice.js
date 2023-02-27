import { createSlice } from "@reduxjs/toolkit";
import { fetchRealestatePosts } from "../../../utils/api";

export const realestateSlice= createSlice({
    name:"realestate",
    initialState:{
        realestate: [],
        status:"200",
        error: null,
    },
    reducers:{
        setSelectedRealestate: (state, action)=>{
            state.selectedRealestate= action.payload
        }

    },
    extraReducers(builder){
        builder
        .addCase(fetchRealestatePosts.pending,(state)=>{
            state.status="loading"
        })
        .addCase(fetchRealestatePosts.fulfilled, (state, action)=>{
            state.status="succeeded";
            state.realestate= action.payload
        })
        .addCase(fetchRealestatePosts.rejected, (state)=>{
            state.status="failed"
        })
    },
});

export const selectAllRealestate= (state)=>state.realestate.realestate;
export const getRealestateStatus= (state)=>state.realestate.status;
export const getRealestateError= (state)=>state.realestate.error;

export const selectedRealestate= realestateSlice.actions;

export default realestateSlice.reducer;