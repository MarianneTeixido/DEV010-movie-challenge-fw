import React from 'react';
import { useState, useEffect } from 'react';
import "./Movies.css"
import { Movie } from '../../services/types';


function Movies() {
    console.log('renderizando movies')
    //movies es la data
    const [movies, setMovies] = useState<any[]>([]);

    //Permite hacer la petición HTTP
    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMmVkNTM4ZjM1ZGM1ZTg1YjQ5ZmIxNzY0ZWVjOWFiNyIsInN1YiI6IjY1MzE1NWQ3YWVkZTU5MDEyYjMxOTEzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ofkUDzjvsajBgmO4rJ78Sea0ge-s5fhc5g8abkDBGSo'
            }
        };
        fetch("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc", options)
            .then((response) => response.json())
            .then((movies) => setMovies(movies.results));
    }, []);

    return (

        <section className='container-movies'  >
            {movies.map((movie: Movie, i: number) =>
                <div className='movie-item' key={i}>
                    <img className='img' src={`https://image.tmdb.org/t/p/w154/${movie.poster_path}`} alt={movie.original_title}/>
                    <h3>{movie.title}</h3>
                    <p>{new Date(movie.release_date).getFullYear()}</p>
                </div>
            )}
        </section>
    )
}

export default Movies;
