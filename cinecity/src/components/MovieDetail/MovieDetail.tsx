import './MovieDetail.css';
import { useEffect, useState } from 'react';
import HeaderComponent from '../Header/Header';
import { Link, useParams } from 'react-router-dom';
import { MovieDetails } from '../../services/types';
import { getDetails } from '../../services/movie-details.ts';
// import { API_KEY } from '../../services/movie-request';

const MovieDetail = () => {
    const { movId } = useParams();
    const [movie, setMovie] = useState<MovieDetails | null>(null);

    useEffect(() => {
        getDetails(Number(movId))
            .then((movie) => { setMovie(movie) })
            .catch((error) => console.log(error));
    }, [movId]);

    if (!movie) {
        console.log('no movie');
        return <p>Cargando...</p>; // Si "movie" es null, muestra "Cargando..."

    }

    return (
        <>
            <HeaderComponent />
            <article className='movie-container'>
                <section className='img-container'>
                    <img
                        className='img-detail'
                        src={`https://image.tmdb.org/t/p/w154/${movie.poster_path}`}
                        alt={movie.original_title} />
                </section>

                <section className='back-section'>
                    <Link to='/'>
                        <button className='back-btn'>Back</button>
                    </Link>
                </section>

                <div className='movie-detail-text'>
                    <h1>{movie.original_title}</h1>
                    <p>Release year: {movie.release_date}</p>
                    {/* <p>Director</p> */}
                    <p>Genre: {movie.genres.map((genre) => genre.name).join(', ')}</p>
                    <p>Duration: {movie.runtime} minutes</p>
                    <p>User Score: {movie.vote_average} </p>
                    <p>Total Votes: {movie.vote_count}</p>
                    <p>Overview:</p>
                    <p>{movie.overview}</p>
                </div>
            </article>
        </>
    )
};

export default MovieDetail;