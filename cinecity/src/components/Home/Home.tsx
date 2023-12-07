import AsideComponent from "../Aside/Aside";
import HeaderComponent from "../Header/Header";
import Movies from "../Movies/Movies";
import { useFilterContext } from "../../FilterContext";

import "./Home.css";

export default function Home() {
  const { appState, setAppState} = useFilterContext();

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