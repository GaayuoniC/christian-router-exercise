import "./NavBar.css";
import { NavLink } from "react-router-dom";

// function MyButton({ myOnClick, text }) {
//   return <button onClick={myOnClick}>{text}</button>;
// }

export default function NavBar() {
  const persons = [
    { name: "John", age: 32 },
    { name: "Jane", age: 33 },
  ];

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          Campus Movies
          {persons.map((person) => {
            return <div key={person.age}>{person.name}</div>;
          })}
          {persons.map(({ name, age }) => {
            return <div key={age}>{name}</div>;
          })}
          <hr />
        </div>
        <div className="menu">
          <ul>
            <NavLink to="/movies">
              <li>Movies</li>
            </NavLink>
            <NavLink to="/actors">
              <li>Actors</li>
            </NavLink>
          </ul>
        </div>
      </nav>
    </header>
  );
}
