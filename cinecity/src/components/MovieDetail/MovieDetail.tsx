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
        return <p>Loading...</p>;
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

                    <Link to='/'>
                        <button className='back-btn'>Back</button>
                    </Link>
                </section>

                <section className='movie-detail-text'>
                    
                        <h1 >{movie.original_title}</h1>
                   
                    <section className='info'>
                        <p className='p-detail'><strong>Release year:</strong> {new Date(movie.release_date).getFullYear()}</p>
                        <p className='p-detail'><strong>Genre:</strong> {movie.genres.map((genre) => genre.name).join(', ')}</p>
                        <p className='p-detail'><strong>Duration:</strong> {movie.runtime} minutes</p>
                        <p className='p-detail'><strong>User Score:</strong> {movie?.vote_average?.toFixed(2)}% </p>
                        <p className='p-detail'><strong>Total Votes:</strong> {movie.vote_count}</p>
                    </section>
                    
                        <p className='p-detail'><strong>Overview:</strong></p>
                        <p className='p-detail'>{movie.overview}</p>
                    
                </section>
            </article>
        </>
    )
};

export default MovieDetail;