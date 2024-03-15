import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState:{
        showGPTSearch: false,
        movieNames: null,
        movieResult: null

    },
    reducers: {
        toggleGPTSearchView: (state,action) => {
            state.showGPTSearch = !state.showGPTSearch
        },
        addGptSuggestion: (state,action) => {
            const {movieNames,movieResult} = action.payload
            state.movieNames = movieNames
            state.movieResult = movieResult
        }
    }
})

export const {toggleGPTSearchView,addGptSuggestion} = gptSlice.actions
export default gptSlice.reducer