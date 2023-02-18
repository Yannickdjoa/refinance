import { createSlice } from "@reduxjs/toolkit";
import { fetchMoneyPosts } from "../../../utils/Api";

export const moneySlice= createSlice({
    name:"money",
    initialState:{
        money: [],
        status:"200",
        error: null,
    },
    reducers:{
        setSelectedMoney: (state, action)=>{
            state.selectedMoney= action.payload
        }

    },
    extraReducers(builder){
        builder
        .addCase(fetchMoneyPosts.pending,(state)=>{
            state.status="loading"
        })
        .addCase(fetchMoneyPosts.fulfilled, (state, action)=>{
            state.status="succeeded";
            state.money= action.payload
        })
        .addCase(fetchMoneyPosts.rejected, (state)=>{
            state.status="failed"
        })
    },
});

export const selectAllMoney= (state)=>state.money.money;
export const getMoneyStatus= (state)=>state.money.status;
export const getMoneyError= (state)=>state.money.error;

export const selectedMoney= moneySlice.actions;

export default moneySlice.reducer;