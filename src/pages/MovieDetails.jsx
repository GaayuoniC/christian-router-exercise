import { useParams } from "react-router-dom";
import { movies } from "../data/movies";

export function MovieDetails() {
  const { moviesId } = useParams();
  console.log("moviesId: " + moviesId);

  const movie = movies.find(({ id }) => {
    console.log("id:", id);
    return id == moviesId;
  });
  console.log("movie:", movie);

  return (
    <>
      {/* check on the link here */}
      <section>
        {moviesId}
        {movie.title}
        <hr />
        {JSON.stringify(movie)}
      </section>
    </>
  );
}
