import {Movie} from "./types"

export const API_KEY = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMmVkNTM4ZjM1ZGM1ZTg1YjQ5ZmIxNzY0ZWVjOWFiNyIsInN1YiI6IjY1MzE1NWQ3YWVkZTU5MDEyYjMxOTEzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ofkUDzjvsajBgmO4rJ78Sea0ge-s5fhc5g8abkDBGSo';

export const buildApiUrl = (page: number) => {
    return `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`
}