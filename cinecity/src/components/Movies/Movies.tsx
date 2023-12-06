
import { Movie } from "../../services/types";
import Pagination from "../Pagination/Pagination";
import "./Movies.css";
import "../Pagination/Pagination.css";
import { Link } from "react-router-dom";
import { useFilterContext } from "../../FilterContext";


type MovieProps = {
  genreId: number;
};

function Movies({ genreId }: MovieProps) {
  console.log("renderizando movies");

   const { appState } = useFilterContext();
   const { movies } = appState;

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