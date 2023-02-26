import { createSlice } from '@reduxjs/toolkit';
import { fetchRelaxationPosts } from '../../../utils/api';

export const realaxationSlice = createSlice ({
    name: "relaxation",
    initialState: {
        relaxation: [],
        status: "200",
        error: null,

    },
    reducers:{
        setSelectedRelaxation: (state, action)=> {
            state.selectedRelaxation=action.payload;
        },
        
    },
    extraReducers(builder){
        builder
          .addCase(fetchRelaxationPosts.pending, (state)=>{
            state.status="loading"
          })
          .addCase(fetchRelaxationPosts.fulfilled, (state, action)=>{
            state.status="succeeded";
            state.relaxation=action.payload;
          })
          .addCase(fetchRelaxationPosts.rejected, (state)=>{
            state.status="failed"
          })

    },
});


export const selectAllRelaxation= (state)=>state.relaxation.relaxation;
export const getRelaxationStatus= (state)=> state.relaxation.status;
export const getRelaxationError= (state)=> state.relaxation.error;

export const setSelectedRelaxation= realaxationSlice.actions;
export default realaxationSlice.reducer;
