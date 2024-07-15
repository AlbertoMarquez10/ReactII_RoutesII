import { NavLink } from "react-router-dom";
import Icon from "../img/pokemon_go_icon_138275.svg";

const Navbar = () => {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);
  return (
    <nav className="Navbar d-flex justify-content-between align-items-center">
      <div className="ms-3">
        <img src={Icon} />
      </div>
      <div className="me-3">
        <NavLink
          className="mx-3 {setActiveClass} text-decoration-none color"
          to="/"
        >
          Home
        </NavLink>

        <NavLink
          className="{setActiveClass} text-decoration-none color"
          to="/pokemones"
        >
          Pokemones
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
