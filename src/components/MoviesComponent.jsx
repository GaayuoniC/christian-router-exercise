import { movies } from "../data/movies";
import { Link } from "react-router-dom";

export function MoviesComponent() {
  return (
    <>
      {movies.map(({ id, title, thumbnail, tagline }) => {
        return (
          <section key={id}>
            <Link to={`/movies/` + id}>
              <h3>{title}</h3>
              <li>{tagline}</li>
              <img src={thumbnail} alt="" />
            </Link>
          </section>
        );
      })}
    </>
  );
}
