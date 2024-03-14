import MovieCard from "./MovieCard"

const MovieList = ({title,movies}) => {
    if( movies === null) return
    return (
        <div className="px-6">
            <h1 className="text-3xl text-white font-bold py-4">{title}</h1>
            <div className="flex overflow-x-scroll">
                <div className="flex">
                    {
                        movies?.map((movie) => <MovieCard key={movie.id} movie={movie}/>)
                    }
                    
                </div>
                
            </div>
            
        </div>
    )
}

export default MovieList