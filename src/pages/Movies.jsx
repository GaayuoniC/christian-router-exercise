import { Link } from "react-router-dom";
export function Movies() {
  return (
    <>
      <p>Movies</p>
      <Link to="/actors">Actors</Link>
    </>
  );
}
