import { Link } from "react-router-dom";

export function Actors() {
  return (
    <>
      <section>
        <h2>Actors</h2>
      </section>
      <Link to="/movies">Link to movies</Link>
    </>
  );
}
