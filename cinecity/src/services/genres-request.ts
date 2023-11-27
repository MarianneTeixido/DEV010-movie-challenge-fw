import { Genre } from '../services/types';
import { API_KEY} from "./movie-request";
//export const API_KEY = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMmVkNTM4ZjM1ZGM1ZTg1YjQ5ZmIxNzY0ZWVjOWFiNyIsInN1YiI6IjY1MzE1NWQ3YWVkZTU5MDEyYjMxOTEzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ofkUDzjvsajBgmO4rJ78Sea0ge-s5fhc5g8abkDBGSo';

export const getGenres = (genre:number): Promise<Genre[]> =>
    new Promise((resolve, reject) => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: API_KEY
            }
        };
        //To do: add genres to the url int a better way
        fetch(`https://api.themoviedb.org/3/genre/movie/list?language=en-US&with_genres=${genre}`, options)
            .then(response => response.json())
            .then(response => resolve(response.genres))
            .catch(err => reject(err));
    });
