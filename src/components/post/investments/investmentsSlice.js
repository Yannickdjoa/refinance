import { createSlice } from "@reduxjs/toolkit";
import { fetchInvestmentsPosts } from "../../../utils/api";

export const investmentsSlice= createSlice({
    name:"investments",
    initialState:{
        investments: [],
        status:"200",
        error: null,
    },
    reducers:{
        setSelectedInvestments: (state, action)=>{
            state.selectedInvestments= action.payload
        }

    },
    extraReducers(builder){
        builder
        .addCase(fetchInvestmentsPosts.pending,(state)=>{
            state.status="loading"
        })
        .addCase(fetchInvestmentsPosts.fulfilled, (state, action)=>{
            state.status="succeeded";
            state.investments= action.payload
        })
        .addCase(fetchInvestmentsPosts.rejected, (state)=>{
            state.status="failed"
        })
    },
});

export const selectAllInvestments= (state)=>state.investments.investments;
export const getInvestmentsStatus= (state)=>state.investments.status;
export const getInvestmentsError= (state)=>state.investments.error;

export const selectedInvestments= investmentsSlice.actions;

export default investmentsSlice.reducer;