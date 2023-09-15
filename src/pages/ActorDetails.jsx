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
        {actorsId.title}
        {JSON.stringify(actor)}
       
        <Link to={"/actors/" + "id"}> {actor.thumbnail}</Link>
      </section>
    </>
  );
}
