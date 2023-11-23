import { useState, useEffect } from "react";
import { buildApiUrl, API_KEY, getMovie } from "../../services/movie-request";
import { Movie } from "../../services/types";
import Pagination from "../Pagination/Pagination";
import "./Movies.css";
import "../Pagination/Pagination.css";
import { Link } from "react-router-dom";
import { useFilterContext } from "../FilterContext/FilterContext";
import { getGenres } from "../../services/genres-request";


type MovieProps = {
  genreId: number;
};

function Movies({ genreId }: MovieProps) {
  console.log("renderizando movies");
 // movies es la data
   const [movies, setMovies] = useState<Movie[]>([]);
   const { appState, setAppState } = useFilterContext();

  //Permite hacer la petición HTTP
  useEffect(() => {
    //buildApi debe de recibir el filtro por género

    const apiUrl = buildApiUrl(appState.page, genreId);

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: API_KEY
      }
    };
    fetch(apiUrl, options)
      .then((response) => response.json())
      .then((movies) => setMovies(movies.results));
  }, [appState.page, genreId]);

  return (
    <>
      <section className="container-movies">
        {movies.map((movie: Movie, i: number) => (
          <div className="movie-item" key={i}>
            <Link to={`/movie/${movie.id}`}>
              <img
                className="img"
                src={`https://image.tmdb.org/t/p/w154/${movie.poster_path}`}
                alt={movie.original_title}
              />
            </Link>
            <h3>{movie.title}</h3>
            <p>{new Date(movie.release_date).getFullYear()}</p>
          </div>
        ))}
      </section>
      <Pagination />
    </>
  );
}

export default Movies;
