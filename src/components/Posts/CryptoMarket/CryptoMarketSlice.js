import { createSlice } from '@reduxjs/toolkit'
import { fetchPostsByTitle } from '../../../utils/Api';


export const postsSlice = createSlice({
    name: "posts",
    initialState:{
        posts: [],
        status: '200',
        error: null,
        
    },
    reducers:{
        setSelectedPost: (state, action) => {
			state.selectedPost = action.payload;
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchPostsByTitle.pending, (state)=>{
                state.status= 'loading'
            })
            .addCase(fetchPostsByTitle.fulfilled, (state, action)=>{
                state.status= 'succeeded';
                state.posts= action.payload;
            })
            .addCase(fetchPostsByTitle.rejected, (state)=>{
                state.status= 'failed'
            })
       
    },
}
)

export const selectAllPosts= (state)=>state.posts.posts;
export const getPostsStatus= (state)=>state.posts.status;
export const getPostsError= (state)=>state.posts.error;
export const selectPostById= (state, postId)=>state.posts.posts.find(post=>post.id===postId);

export const setSelectedPost= postsSlice.actions;
export default postsSlice.reducer;


