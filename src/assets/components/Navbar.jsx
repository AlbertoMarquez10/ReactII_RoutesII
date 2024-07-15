import { NavLink } from "react-router-dom";

const Navbar = () => {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);
  return (
    <nav className="Navbar d-flex justify-content-between align-items-center">
      <div className="ms-3">Icon</div>
      <div className="me-3">
        <NavLink className="mx-3 {setActiveClass}" to="/">
          Home
        </NavLink>

        <NavLink className={setActiveClass} to="/pokemones">
          Pokemones
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
