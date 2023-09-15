import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";
import { ActorsComponent } from "../components/ActorsComponent";

// console.log(actorsList);//Debugging

export function Actors() {
  const { actorId } = useParams();

  return (
    <>
      <section>
        <h2>Actors</h2>
        <ActorsComponent />
      </section>
      <Link to="/movies">Link to movies</Link>
     

      <p>{actorId}</p>
    </>
  );
}
