import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { MovieComponent } from "../components/MovieComponents";

export function Movies() {
  const { moviesList } = useParams();
  return (
    <>
      <h2>Movies</h2>
      <MovieComponent />
      <Link to="/actors">Link to actors</Link>
      <p>{moviesList}</p>
      {/* <div>
        {moviesList.map((id, title, tagline, image) => {
          console.log(title, tagline, image);
          return <p key={id}>{tagline}</p>;
        })}
      </div> */}
    </>
  );
}
