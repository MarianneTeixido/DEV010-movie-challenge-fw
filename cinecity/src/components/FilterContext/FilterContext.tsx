import React, { createContext, useState, useContext, Dispatch, SetStateAction} from 'react';
import { Movie, Genre } from '../../services/types';

type FilterContextType = {
    movies: Movie[];
    page: number;
    genre: number;
    genres: Genre[];
};

type FilterStateContextType = {
    appState: FilterContextType;
    setAppState: Dispatch<SetStateAction<FilterContextType>>;
  };

const FilterContext = createContext<FilterStateContextType | null>(null);


//const genreIds = [99, 10402, 16, 18, 878, 36];

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
        genres: []
    });

    return (
        <FilterContext.Provider value={{ appState, setAppState }}>
            {children}
        </FilterContext.Provider>
    );
};
//Solucionar el refresh, pendiente
