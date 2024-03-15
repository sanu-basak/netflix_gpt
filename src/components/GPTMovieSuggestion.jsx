import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const GPTMovieSuggestion = () => {
    const gptResult = useSelector((store) => store.gpt)
    const {movieNames,movieResult} = gptResult

    if(!movieResult) return null

    return (
        <div className="p-4 m-4 bg-black text-white">
            {
                movieNames.map((movie,index) => <MovieList key={movie} title={movie} movies={movieResult[index]}/>)
            }
        </div>
    )

}

export default GPTMovieSuggestion 