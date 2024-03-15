import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constant"
import { useDispatch } from "react-redux"
import { addNowPlayingMovie } from "../utils/movieSlice"

const useMovieSuggestion =  (searchText) => {
    const dispatch = useDispatch()

    const movieList = async () => {
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+searchText+'&include_adult=false&language=en-US&page=1',API_OPTIONS)
        const json = await data.json()
        // console.log(json.results)
        dispatch(addNowPlayingMovie(json.results))
    }
   
    useEffect(()=>{
        movieList()
    },[])
}

export default useMovieSuggestion