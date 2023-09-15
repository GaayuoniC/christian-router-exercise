import { useParams } from "react-router-dom";
import { actors } from "../data/actors";
import { Link } from "react-router-dom";

export function ActorDetails() {
  //   const params = useParams();
  const { actorsId } = useParams();
  //   console.log(actorsId);
  //   console.log(params);

  const actor = actors.find(({ id }) => {
    // console.log(typeof id);
    // console.log(typeof actorsId);
    return id == actorsId;
  });
  console.log(actor);

  return (
    <>
      <section>
        {/* Was ist actorsId? Hat actorsId eine `title` Property? */}
        {actorsId.title}
        {JSON.stringify(actor)}
        {/* hat actor eine `thumbnail` Property */}
        <Link to={"/actors/" + "id"}> {actor.thumbnail}</Link>
        {/* Sol könnte es weiter gehen: */}
        <h3>{actor.name}</h3>
        {/* ... */}
      </section>
    </>
  );
}
