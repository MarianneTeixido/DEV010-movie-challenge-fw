import React, { createContext, useState, useContext, Dispatch, SetStateAction } from 'react';
import { Movie, Genre } from './services/types';
import { useEffect } from 'react';
import { buildApiUrl, API_KEY } from './services/movie-request';

type FilterContextType = {
    movies: Movie[];
    page: number;
    genre: number;
    genres: Genre[];
    sortBy: string;

    selectedGenre: number | null;
    selectedSort: string;
    urlApi: string;
};

type FilterStateContextType = {
    appState: FilterContextType;
    setAppState: Dispatch<SetStateAction<FilterContextType>>;
    setCurrentPage: (page: number) => void;
    setSortMovies: (order: string) => void;
    setMovies: (movies: Movie[]) => void;

    setSelectedGenre: (genre: number | null) => void;
    setSelectedSort: (sort: string) => void;
    setUrlApi: (url: string) => void;
};

const FilterContext = createContext<FilterStateContextType | null>(null);


export const useFilterContext = () => {
    const context = useContext(FilterContext);
    if (!context) {
        throw new Error('useFilterContext must be used within a FilterContextProvider');
    }
    return context;
}

type FilterContextProviderProps = {
    children: React.ReactNode;
};

export const FilterContextProvider = ({ children }: FilterContextProviderProps) => {
    const [appState, setAppState] = useState<FilterContextType>({
        movies: [],
        page: 1,
        genre: 0,
        genres: [],
        sortBy: 'popularity.desc',
        selectedGenre: null,
        selectedSort: 'popularity.desc',
        urlApi: 'https://api.themoviedb.org/3/discover/movie?api_key=0a0e1e1b0b0c0d0e0f0a0b0c0d0e0f0a&language=en-US',
    });

    const setMovies = (movies: Movie[]) => {
        setAppState((prevState) => ({
            ...prevState,
            movies: movies
        }));
    }

    const setSortMovies = (order: string) => {
        setAppState((prevState) => ({
            ...prevState,
            sortBy: order
        }));
    }


    const setCurrentPage = (page: number) => {
        setAppState((prevState) => ({
            ...prevState,
            page: page
        }));
    }

    const setSelectedGenre = (genre: number | null) => {
        setAppState((prevState) => ({
            ...prevState,
            selectedGenre: genre
        }));
    }

    const setSelectedSort = (sort: string) => {
        setAppState((prevState) => ({
            ...prevState,
            selectedSort: sort
        }));
    }
    const setUrlApi = (url: string) => {
        setAppState((prevState) => ({
            ...prevState,
            urlApi: url
        }));
    }
    //Revisar libreria react query
    useEffect(() => {
        const apiUrl = buildApiUrl(appState.page, appState.genre, appState.sortBy);

        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: API_KEY,
            }
        };
        fetch(apiUrl, options)
            .then((response) => response.json())
            .then((data) => {
                setMovies(data.results)
            })
            .catch((error) => console.error(error));
    }, [appState.sortBy, appState.genre, appState.page]);

    return (
        <FilterContext.Provider value={{ appState, setAppState, setMovies, setCurrentPage, setSortMovies, setSelectedGenre, setSelectedSort, setUrlApi }}>
            {children}
        </FilterContext.Provider>
    );
};
//Solucionar el refresh, pendiente
