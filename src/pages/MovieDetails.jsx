import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { movies } from "../data/movies";

export function MovieDetails() {
  const { moviesId } = useParams();
  const params = useParams();
  console.log(moviesId);
  console.log(params);

  const movie = movies.find((id) => {
    return id == moviesId; 
  });
  console.log(movie);

  return (
    <>
    {/* check on the link here */}
      <Link to={`/movies/${moviesId}`}> 
        <section>
          {moviesId}
          {JSON.stringify(movies)}
          
        
        </section>
      </Link>
    </>
  );
}
