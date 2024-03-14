import VideoBackground from "./VideoBackground"
import VideoTitle from "./VideoTitle"
import { useSelector } from "react-redux"

const MainContainer = () => {
    
    const movies = useSelector((store) => store.movie?.nowPlayingMovie)
    if (movies === null) return
    const mainMovie = movies[0]
    
    // console.log(mainMovie.id)
    
    return (
        <div>
            <VideoTitle title={mainMovie.title} overview={mainMovie.overview}/>
            <VideoBackground movieId={mainMovie.id}/>
        </div>
    )
}

export default MainContainer