import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        nowPlayingMovie: null,
        trailerVideo: null
    },
    reducers: {
        addNowPlayingMovie: (state,action) => {
            state.nowPlayingMovie = action.payload
        },
        addTrailerVideo: (state,action) => {
            state.trailerVideo = action.payload
        }
    }
})
export const {addNowPlayingMovie,addTrailerVideo} = movieSlice.actions
export default movieSlice.reducer