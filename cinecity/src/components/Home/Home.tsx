import AsideComponent from "../Aside/Aside";
import HeaderComponent from "../Header/Header";
import Movies from "../Movies/Movies";
import { useFilterContext } from "../../FilterContext";

import "./Home.css";
import { useEffect } from "react";
import { getGenres } from "../../services/genres-request";
import { Genre } from "../../services/types";
import { API_KEY, buildApiUrl } from "../../services/movie-request";

export default function Home() {
  const { appState, setAppState} = useFilterContext();

  // useEffect(() => {
  //   getGenres(appState.genre)
  //     .then((genre: Genre[]) => {
  //       setAppState((prevState) => ({
  //         ...prevState,
  //         genres: genre
  //       }));
  //       setSortMovies(appState.sortBy);
  //     })
  //     .catch((error) => console.error(error));
  // }, [appState.genre, appState.sortBy]);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: API_KEY,
      }
    };
    fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${appState.page}&sort_by=${appState.sortBy}&with_genres=${appState.genre > 0 ? appState.genre : ''}`, options)
      .then((response) => response.json())
      .then((data) => {
        setAppState((prevState) => ({
          ...prevState,
          movies: data.results
        }));
      })
      .catch((error) => console.error(error));
  }, [appState.sortBy, appState.genre]);

  // useEffect(() => {
  //   const genre$ = from([appState.genre]);
  //   const sortBy$ = from([appState.sortBy]);

  //   const subscription = combineLatest([genre$, sortBy$]).subscribe(([genre, sortBy]: [number, string]) => {
  //     setAppState(prevState => ({
  //       ...prevState,
  //       genre: genre,
  //       sortBy: sortBy,
  //     }));
  //     setSortMovies(sortBy);
  //   });

  //   return () => subscription.unsubscribe();
  // }, [appState.genre, appState.sortBy, setAppState, setSortMovies]);
  //console.log("Este es el orden", appState.sortBy);
  
  return (
    <main>
      <AsideComponent
        setGenre={(genre: number) => {
          setAppState((prevState) => ({
            ...prevState,
            genre: genre
          }));
        }}
        genre={appState.genre}
      />
      <div>
        {<HeaderComponent />}
        <Movies genreId={appState.genre} />
      </div>
    </main>
  );
}