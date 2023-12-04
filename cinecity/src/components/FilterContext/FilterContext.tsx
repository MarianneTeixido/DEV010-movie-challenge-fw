import React, { createContext, useState, useContext, Dispatch, SetStateAction } from 'react';
import { Movie, Genre } from '../../services/types';

type FilterContextType = {
    movies: Movie[];
    page: number;
    genre: number;
    genres: Genre[];
    sortBy: string;

    selectedGenre: number | null;
    selectedSort: string;
};

type FilterStateContextType = {
    appState: FilterContextType;
    setAppState: Dispatch<SetStateAction<FilterContextType>>;
    setCurrentPage: (page: number) => void;
    sortMoviesByPopularity: (order: string) => void;
    setMovies: (movies: Movie[]) => void;

    setSelectedGenre: (genre: number | null) => void;
    setSelectedSort: (sort: string) => void;
    
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
    });

    const setMovies = (movies: Movie[]) => { 
        setAppState((prevState) => ({
            ...prevState,
            movies: movies
        }));
    }
    //cambiar a setSortBy
    const sortMoviesByPopularity = (order: string) => { 
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
   


    return (
        <FilterContext.Provider value={{ appState, setAppState, setMovies,setCurrentPage, sortMoviesByPopularity, setSelectedGenre, setSelectedSort }}>
            {children}
        </FilterContext.Provider>
    );
};
//Solucionar el refresh, pendiente
