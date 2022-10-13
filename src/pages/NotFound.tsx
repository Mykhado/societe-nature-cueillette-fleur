import { NavLink } from "react-router-dom";
const NotFound = () => {
  return (
    <div>
      <h1>Oops!Y'a un ptit soucis.</h1>
      <p>Essaie de revenir sur ces pages</p>
      <NavLink to="/" end className="nav-link ">
        Home
      </NavLink>
      <NavLink to="Details" className="nav-link">
        Détails
      </NavLink>
    </div>
  );
};

export default NotFound;
