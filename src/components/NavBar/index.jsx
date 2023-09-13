import "./NavBar.css";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">Campus Movies</div>
        <div className="menu">
          <ul>
           <NavLink to = "/movies"><li>Movies</li>
            </NavLink> 
            <NavLink to = "/actors"> <li>Actors</li>
            </NavLink> 


           
          </ul>
        </div>
      </nav>
    </header>
  );
}
