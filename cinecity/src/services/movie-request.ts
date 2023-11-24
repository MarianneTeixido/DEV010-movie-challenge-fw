// import { Movie } from "./types";

export const API_KEY = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMmVkNTM4ZjM1ZGM1ZTg1YjQ5ZmIxNzY0ZWVjOWFiNyIsInN1YiI6IjY1MzE1NWQ3YWVkZTU5MDEyYjMxOTEzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ofkUDzjvsajBgmO4rJ78Sea0ge-s5fhc5g8abkDBGSo';


export const buildApiUrl = (page: number, genre: number, sortBy:string) => {
    return `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=${sortBy}&with_genres=${genre > 0 ? genre : ''}`

};


// export const getMovie = (genre: number, page: number): Promise<Movie[]> => {
//     return new Promise ((resolve, reject)=>{
//         const options = {
//             method: "GET",
//             headers:{
//                 accept: "application/json",
//                 Autorization: API_KEY
//             }
//         };
//         const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${genre > 0 ? genre : ''}`;
//         fetch(url, options)
//         .then((response)=> response.json())
//         .then((response)=>{
//             const AllMovie: Movie[] = response?.results;
//             const moviePoster: Movie[] = AllMovie.filter(
//                 (movie:Movie)=> movie.poster_path !== null
//             );
//             resolve(moviePoster);
//         })
//         .catch((err) => reject(err))
//     })

//  }

