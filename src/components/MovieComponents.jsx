import { movies } from "../data/movies";

export function MovieComponent() {
  return (
    <>
      {movies.map(({ id, title, tagline }) => {
        return (
          <section key={id}>
            <h3>{title}</h3>
            <li>{tagline}</li>
          </section>
        );
      })}
    </>
  );
}
