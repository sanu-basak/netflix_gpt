import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constant"
import { useDispatch } from "react-redux"
import { addTrailerVideo } from "../utils/movieSlice"

const useMovieVideo = (movieId) => {
    const dispatch = useDispatch()
    const fetchVideo = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US',API_OPTIONS)
        const json = await data.json()
        const filterData = json?.results?.filter((video) => video.type === "Trailer")
        const trailer= filterData.length ? filterData[0] : json.results[0]
        console.log(trailer)
        dispatch(addTrailerVideo(trailer))
    }

    useEffect(() => {
        fetchVideo()
    },[])
}

export default useMovieVideo