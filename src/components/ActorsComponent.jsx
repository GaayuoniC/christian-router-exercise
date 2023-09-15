import "../data/actors";
import "../components/ActorsComponent.css"; // hier solltest du ./ActorsComponent.css verwenden
import { actors } from "../data/actors";
import { Link } from "react-router-dom";
export function ActorsComponent() {
  //   const { actorId } = useParams();

  return (
    <>
      {actors.map(({ id, name, character, image }) => {
        return (
          <section key={id} className="actors-container">
            <div className="actors-profile">
              <h3>Actor : {name}</h3>
              <h4>Role played : {character}</h4>
              <Link to={"/actors/" + id}>
                <img src={image} alt={"actor image of " + name}></img>
              </Link>
            </div>
          </section>
        );
      })}

      {/* <p>{actorId}</p> */}
    </>
  );
}
