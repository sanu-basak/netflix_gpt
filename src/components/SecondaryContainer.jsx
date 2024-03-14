import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movie?.nowPlayingMovie)
    return (
        <div className="bg-black">
            <div className="-mt-80 z-20 pl-10 relative">
                <MovieList title={"Now Playing"} movies={movies}/>
                <MovieList title={"Trending"} movies={movies}/>
                <MovieList title={"Popular"} movies={movies}/>
                <MovieList title={"Upcomming Movies"} movies={movies}/>
                <MovieList title={"Horror"} movies={movies}/>
            </div>
            
        </div>
    )
}

export default SecondaryContainer