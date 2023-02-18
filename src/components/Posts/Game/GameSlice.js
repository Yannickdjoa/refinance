import { createSlice } from "@reduxjs/toolkit";
import { fetchGamePosts } from "../../../utils/Api";

export const gameSlice= createSlice({
    name:"game",
    initialState:{
        game: [],
        status:"200",
        error: null,
    },
    reducers:{
        setSelectedGame: (state, action)=>{
            state.selectedGame= action.payload
        }

    },
    extraReducers(builder){
        builder
        .addCase(fetchGamePosts.pending,(state)=>{
            state.status="loading"
        })
        .addCase(fetchGamePosts.fulfilled, (state, action)=>{
            state.status="succeeded";
            state.game= action.payload
        })
        .addCase(fetchGamePosts.rejected, (state)=>{
            state.status="failed"
        })
    },
});

export const selectAllGame= (state)=>state.game.game;
export const getGameStatus= (state)=>state.game.status;
export const getGameError= (state)=>state.game.error;

export const selectedGame= gameSlice.actions;

export default gameSlice.reducer;