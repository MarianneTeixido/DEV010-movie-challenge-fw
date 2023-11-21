import "./Aside.css";
import { Genre } from "../../services/types";
import { useEffect } from "react";
import { getGenres } from "../../services/genres-request";
import { useFilterContext } from "../FilterContext/FilterContext";

type AsideProps = {
  setGenre: (genre: number) => void;
  genre: number;
};

function Aside({ setGenre, genre }: AsideProps) {
  const { appState, setAppState } = useFilterContext();

  useEffect(() => {
    getGenres(genre)
      .then((genre: Genre[]) => {
        setAppState((prevState) => ({
          ...prevState,
          genres: genre
        }));
      })
      .catch((error) => console.error(error));
  }, [genre]);
  const genreIds = [99, 10402, 16, 18, 878, 36];
  return (
    <aside className="container">
      <div className="cont-title">
        <h3 className="title">Filter</h3>
      </div>
      <div className="cont-buttons">
        {appState.genres
          ?.filter((genre: Genre) => genreIds.includes(genre.id))
          .map((genre: Genre, i: number) => (
            <button
              className="btn"
              onClick={() => {
                setGenre(genre.id);
              }}
              key={i}
            >
              {genre.name}
            </button>
          ))}
      </div>
      <div className="cont-sort">
        <h3 className="title">Sort by</h3>
      </div>
      <div className="cont-buttons2">
        <button className="btn">Title A-Z</button>
        <button className="btn">Title A-Z</button>
        <button className="btn">Popularity</button>
      </div>
      <div className="cont-search">
        <h3 className="title">Search</h3>
      </div>
      <div className="cont-buttons3">
        <span>
          <input placeholder="Search here"></input>
          <button className="btn-go">Go</button>
        </span>
      </div>
      <div className="cont-footer">
        <p>Developed by Marianne Teixidó</p>
      </div>
    </aside>
  );
}

export default Aside;
