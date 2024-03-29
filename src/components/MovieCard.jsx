const MovieCard = ({movie}) => {
    if(!movie.poster_path) return
    return (
        <div className="w-48 pr-4">
            <img alt="movie_card" src={"https://image.tmdb.org/t/p/w500"+movie.poster_path}/>
        </div>
    )
}

export default MovieCard