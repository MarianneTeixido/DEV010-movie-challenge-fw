import AsideComponent from "../Aside/Aside";
import HeaderComponent from "../Header/Header";
import Movies from "../Movies/Movies";
import { useFilterContext } from "../FilterContext/FilterContext";

// import Pagination from '../Pagination/Pagination';
import "./Home.css";
import { useEffect } from "react";
import { getGenres } from "../../services/genres-request";
import { Genre } from "../../services/types";


export default function Home() {
  const { appState, setAppState, sortMoviesByPopularity, setSelectedSort} = useFilterContext();

  const setSort = (sort: string) => {
    setAppState(prevState => ({
      ...prevState,
      sortBy: sort,
    }));
  };

  useEffect(() => {
    getGenres(appState.genre)
      .then((genre: Genre[]) => {
        setAppState((prevState) => ({
          ...prevState,
          genres: genre
        }));
        sortMoviesByPopularity(appState.sortBy);
      })
      .catch((error) => console.error(error));
  }, [appState.genre, appState.sortBy]);


  console.log("Este es el orden", appState.sortBy);
  return (
    <main>
      <AsideComponent
        setGenre={(genre: number) => {
          setAppState((prevState) => ({
            ...prevState,
            genre: genre
          }));
        }}
        //setSort={setSort} 
        genre={appState.genre}
      />
      <div>
        { <HeaderComponent /> }
        <Movies genreId={appState.genre} />
      </div>
    </main>
  );
}