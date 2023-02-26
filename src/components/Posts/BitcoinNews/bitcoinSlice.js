import { createSlice } from '@reduxjs/toolkit'
import { fetchBitcoinPosts } from '../../../utils/api';


export const bitcoinSlice = createSlice({
    name: "bitcoin",
    initialState:{
        bitcoin: [],
        status: '200',
        error: null,
        
    },
    reducers:{
        setSelectedBitcoin: (state, action) => {
			state.SelectedBitcoin = action.payload;
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchBitcoinPosts.pending, (state)=>{
                state.status= 'loading'
            })
            .addCase(fetchBitcoinPosts.fulfilled, (state, action)=>{
                state.status= 'succeeded';
                state.bitcoin= action.payload;
            })
            .addCase(fetchBitcoinPosts.rejected, (state)=>{
                state.status= 'failed'
            })
       
    },
}
)

export const selectAllBitcoin= (state)=>state.bitcoin.bitcoin;
export const getBitcoinStatus= (state)=>state.bitcoin.status;
export const getBitcoinError= (state)=>state.bitcoin.error;
export const selectBitcoinById= (state, postId)=>state.bitcoin.bitcoin.find(post=>post.id===postId);

export const setSelectedBitcoin= bitcoinSlice.actions;
export default bitcoinSlice.reducer;
