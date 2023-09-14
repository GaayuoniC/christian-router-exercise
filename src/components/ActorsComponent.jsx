import "../data/actors";
import { actors } from "../data/actors";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
export function ActorsComponent() {
//   const { actorId } = useParams();

  return (
    <>
      {actors.map(({id, name,character,image}) => {
        return (
          <section key={id}>
            <h3>{name}</h3>
            <h4>{character}</h4>
            <Link to={"/actors" + id}>
              <img src={image} alt={"actor image of " + name}></img>
            </Link>
          </section>
        );
      })}

      <h1>Actors</h1>
      {/* <p>{actorId}</p> */}
    </>
  );
}
