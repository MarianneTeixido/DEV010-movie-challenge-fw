
import AsideComponent from '../Aside/Aside';
import HeaderComponent from '../Header/Header';
import Movies from '../Movies/Movies';
import { useFilterContext } from '../FilterContext/FilterContext';


// import Pagination from '../Pagination/Pagination';
import './Home.css';
import { useEffect } from 'react';
import { getGenres } from '../../services/genres-request';
import { Genre, Movie } from '../../services/types';


type AsideProps = {
    setGenre: (genre: number) => void;
    genre: number;
};


export default function Home() {
   const { appState, setAppState } = useFilterContext();

   useEffect(() => {
        getGenres(appState.genre)
        .then((genre:Genre[]) => {
            setAppState((prevState) => ({
                ...prevState,
                genres: genre,
            }));
        })
        .catch((error) => console.error(error));
   }, [appState.genre]);
   console.log("Estos son los géneros",appState.genres);
    return (
        <main>
            <AsideComponent setGenre={(genre:number)=>{
                setAppState((prevState) => ({
                    ...prevState,
                    genre: genre,
                }));
            }} genre={appState.genre}
            />
            <div>
                <HeaderComponent />
                <Movies  />
                {/* <Pagination /> */}
            </div>
        </main>
    );
}


