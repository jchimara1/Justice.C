const MovieCard =({data}) => {
const {title, overview, vote_average, poster_path} = data
    const posterImage = `https://image.tmdb.org/t/p/w780/${poster_path}`
    return(
        <>
            <div style = {{border: "red 3px solid"}}>
                <h1>{title}</h1>
                <p>{overview}</p>
                <p>{vote_average}</p>
                <img src={posterImage}/>
            </div>

        </>

    )
}


export default MovieCard;