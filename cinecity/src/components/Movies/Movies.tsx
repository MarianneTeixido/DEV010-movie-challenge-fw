import { useState, useEffect } from 'react';
import { buildApiUrl, API_KEY } from '../../services/movie-request';
import { Movie } from '../../services/types';
import Pagination from '../Pagination/Pagination';
import "./Movies.css";
import "../Pagination/Pagination.css";
import { Link } from 'react-router-dom';



function Movies() {
    console.log('renderizando movies')
    //movies es la data
    const [movies, setMovies] = useState<Movie[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);

    //Permite hacer la petición HTTP
    useEffect(() => {

        const apiUrl = buildApiUrl(currentPage);

        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: API_KEY,
            }
        };
        fetch(apiUrl, options)
            .then((response) => response.json())
            .then((movies) => setMovies(movies.results));
    }, [currentPage]);

    return (
        <>
            <section className='container-movies'  >
                {movies.map((movie: Movie, i: number) =>
                    <div className='movie-item' key={i}>
                        <Link to={`/movie/${movie.id}`}>
                        <img className='img' src={`https://image.tmdb.org/t/p/w154/${movie.poster_path}`} alt={movie.original_title} />
                        </Link>
                        <h3>{movie.title}</h3>
                        <p>{new Date(movie.release_date).getFullYear()}</p>
                    </div>
                )}
            </section>
            <Pagination page={currentPage} setCurrentPage={setCurrentPage} />
        </>
    )
}

export default Movies;
