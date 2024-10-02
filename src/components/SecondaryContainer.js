import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies)
    return (
        movies?.nowPlayingMovies &&
        <div className=" bg-black">
            <div className="md:-mt-52  mt-0 relative z-20 md:pl-12 pl-4" >
                <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
                <MovieList title={"Trending"} movies={movies?.nowPlayingMovies} />
                <MovieList title={"Popular movies"} movies={movies?.popularMovies} />
                <MovieList title={"Upcoming Movies"} movies={movies?.nowPlayingMovies} />
                <MovieList title={"Horror"} movies={movies?.nowPlayingMovies} />
            </div>
        </div>
    )
}

export default SecondaryContainer
